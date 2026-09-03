const findLongestWordEndingWith = (str, targetChar) => {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (
        currentWord[currentWord.length - 1] === targetChar &&
        currentWord.length > longestWord.length
      ) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }
  if (
    currentWord[currentWord.length - 1] === targetChar &&
    currentWord.length > longestWord.length
  ) {
    longestWord = currentWord;
  }
  return longestWord;
};

console.log(
  findLongestWordEndingWith(
    "The quick lazy crazy sazy brown fox jumps over the lazy dog",
    "y",
  ),
);
console.log(
  findLongestWordEndingWith(
    "JavaScript is a powerful programming language",
    "e",
  ),
);
console.log(
  findLongestWordEndingWith(
    "A journey of a thousand miles begins with a single step",
    "p",
  ),
);
