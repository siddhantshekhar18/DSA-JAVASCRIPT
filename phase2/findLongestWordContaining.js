const findLongestWordContaining = (str, targetChar) => {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (
        currentWord.includes(targetChar) &&
        currentWord.length > longestWord.length
      ) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }
  if (
    currentWord.includes(targetChar) &&
    currentWord.length > longestWord.length
  ) {
    longestWord = currentWord;
  }
  return longestWord;
};

console.log(
  findLongestWordContaining("The quick brown fox jumps over the lazy dog", "o"),
);
console.log(
  findLongestWordContaining(
    "JavaScript is a powerful programming language",
    "a",
  ),
);
console.log(
  findLongestWordContaining(
    "A journey of a thousand miles begins with a single step",
    "e",
  ),
);
