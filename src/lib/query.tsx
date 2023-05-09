"use server";
import { YoutubeTranscript } from "youtube-transcript";
import { youtube_parser, splitString, messageContext } from "./utils";
import openai from "./openai";

const query = async (url: string) => {
  const parsedUrl = youtube_parser(url);
  if (typeof parsedUrl !== "string") return 'ERROR'
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
    messages: [
      ...messages,
      {
        role: "user",
        content: `Ok that is all of the information. Please use the ingredients and instructions that we have collected and format your response with nothing else other than a json object for the single recipe using the following structure  {
            "ingredients" : [""],
            "instructions" : [""]
          }`,
      },
    ],
    temperature: 0,
  };

  const completion = await openai.createChatCompletion(params);

  return completion.data.choices[0];
};

export default query;
