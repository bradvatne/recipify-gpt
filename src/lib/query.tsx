"use server";
import { YoutubeTranscript } from "youtube-transcript";
import { youtube_parser, splitString, messageContext } from "./utils";
import openai from "./openai";

const query = async (url: string) => {
  const parsedUrl = youtube_parser(url);
  if (typeof parsedUrl !== "string") {
    throw new Error(
      "Error parsing URL: Resulting URL is not a valid YouTube URL String"
    );
  }

  let longTranscript = "";
  const rawTranscript = await YoutubeTranscript.fetchTranscript(parsedUrl);
  rawTranscript.forEach((item) => (longTranscript += ` ${item.text} `));
  const arrayTranscript = splitString(longTranscript);

  //provide transcript in multiple messages wtih context to avoid token capping and maintain context
  const messages: any = arrayTranscript.map((item) => ({
    role: "user",
    content: item.concat(messageContext),
  }));

  const params = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };

  const completion = await openai.createChatCompletion(params);
  return completion.data.choices[0];
};

export default query;
