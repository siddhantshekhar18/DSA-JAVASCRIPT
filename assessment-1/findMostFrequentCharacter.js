const findMostFrequentCharacter = (str) => {
  const charCount = {};

  let maxCount = 0;
  let mostFrequentChar = null;

  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostFrequentChar = char;
    }
  }
  return mostFrequentChar;
};

console.log(findMostFrequentCharacter("hello world"));
