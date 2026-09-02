const findLongestWordLength = (str) => {
  let currentWord = "";
  let longestWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
  return longestWord.length;
};

console.log(
  findLongestWordLength("The quick brown fox jumps over the lazy dog"),
);
console.log(
  findLongestWordLength("JavaScript is a powerful programming language"),
);
console.log(
  findLongestWordLength(
    "A journey of a thousand miles begins with a single step",
  ),
);
