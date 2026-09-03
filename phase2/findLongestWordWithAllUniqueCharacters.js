const findLongestWordWithAllUniqueCharacters = (str) => {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      let seenChars = new Set();
      let hasRepeatedChars = false;

      for (let j = 0; j < currentWord.length; j++) {
        if (seenChars.has(currentWord[j])) {
          hasRepeatedChars = true;
          break;
        }
        seenChars.add(currentWord[j]);
      }
      if (!hasRepeatedChars && currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }
  let seenChars = new Set();
  let hasRepeatedChars = false;

  for (let j = 0; j < currentWord.length; j++) {
    if (seenChars.has(currentWord[j])) {
      hasRepeatedChars = true;
      break;
    }
    seenChars.add(currentWord[j]);
  }
  if (!hasRepeatedChars && currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
  return longestWord;
};

console.log(
  findLongestWordWithAllUniqueCharacters("cat dog apple banana tree book"),
);
