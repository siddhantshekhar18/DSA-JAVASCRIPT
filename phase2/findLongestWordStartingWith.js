const findLongestWordStartingWith = (str, targetChar) => {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (
        currentWord[0] === targetChar &&
        currentWord.length > longestWord.length
      ) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }
  if (
    currentWord[0] === targetChar &&
    currentWord.length > longestWord.length
  ) {
    longestWord = currentWord;
  }
  return longestWord;
};

console.log(
  findLongestWordStartingWith(
    "The quick brown fox jumps over the lazy dog",
    "q",
  ),
);
console.log(
  findLongestWordStartingWith(
    "JavaScript is a powerful programming language",
    "p",
  ),
);
console.log(
  findLongestWordStartingWith(
    "A journey of a thousand miles begins with a single step",
    "s",
  ),
);
