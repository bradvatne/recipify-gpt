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
Your job is to parse this video transcript and extract items pertaining to the ingredients and instructions for each recipe. If the video is not a cooking recipe video, reply with ERROR before you say anything. Reply to each response with your current items that you have extracted so that we can keep the context going. Use your discretion to detect any anomalies in the auto-generated transcripts you are provided and make corrections where you see fit"
`;
