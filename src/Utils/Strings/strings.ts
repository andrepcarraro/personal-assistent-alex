import stringSimilarity from "string-similarity";

export const getBestMatch = (
  mainText: string,
  targetTextList: Array<string>
) => {
  let bestMatchObj = stringSimilarity.findBestMatch(mainText, targetTextList);
  return {
    text: bestMatchObj.bestMatch.target,
    rating: bestMatchObj.bestMatch.rating,
  };
};
