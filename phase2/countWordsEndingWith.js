const countWordsEndingWith = (str, targetChar) => {
  let count = 0;
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (currentWord[currentWord.length - 1] === targetChar) {
        count++;
      }
      currentWord = "";
    }
  }
  if (currentWord[currentWord.length - 1] === targetChar) {
    count++;
  }
  return count;
};

console.log(
  countWordsEndingWith(
    "The quick lazy crazy sazy brown fox jumps over the lazy dog",
    "y",
  ),
);
console.log(
  countWordsEndingWith("JavaScript is a powerful programming language", "e"),
);
console.log(
  countWordsEndingWith(
    "A journey of a thousand miles begins with a single step",
    "p",
  ),
);
