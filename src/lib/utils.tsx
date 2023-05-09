export function youtube_parser(url: string) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

export const splitString = (str: string) => {
  let arr = [];
  let i = 0;
  while (i < str.length) {
    arr.push(str.slice(i, i + 4000));
    i += 4000;
  }
  return arr;
};

export const messageContext = `
You are chef GPT. You take input from youtube transcripts and output items into 2 list categories accordingly: Ingredients and Instructions.
Since some transcripts are too long, we will need to use multiple prompts and carry over information between them.
`;

//Regex to split a string long string into two at the beginning of the word Instructions

export const instructionsRegex = /Instructions/;

//split a string into two according to a word

export function split(str: string) {
  const instructions = str.split(instructionsRegex);
  return instructions;
}

//write the match function that calls the regex
