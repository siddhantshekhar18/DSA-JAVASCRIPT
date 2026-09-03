const countWordsWithRepeatedCharacters = (str) => {
  let count = 0;
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      let seenChars = new Set();
      let hasRepeatedChar = false;

      for (let j = 0; j < currentWord.length; j++) {
        if (seenChars.has(currentWord[j])) {
          hasRepeatedChar = true;
          break;
        }
        seenChars.add(currentWord[j]);
      }
      if (hasRepeatedChar) {
        count++;
      }
      currentWord = "";
    }
  }
  let seenChars = new Set();
  let hasRepeatedChar = false;

  for (let j = 0; j < currentWord.length; j++) {
    if (seenChars.has(currentWord[j])) {
      hasRepeatedChar = true;
      break;
    }
    seenChars.add(currentWord[j]);
  }
  if (hasRepeatedChar) {
    count++;
  }
  return count;
};

console.log(countWordsWithRepeatedCharacters("cat dog apple banana tree book"));
