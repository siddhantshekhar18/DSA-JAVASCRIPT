const countWordsStartingWith = (str, targetChar) => {
  let count = 0;
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (currentWord[0] === targetChar) {
        count++;
      }
      currentWord = "";
    }
  }
  if (currentWord[0] === targetChar) {
    count++;
  }
  return count;
};

console.log(
  countWordsStartingWith("The quick brown fox jumps over the lazy dog", "q"),
);
console.log(
  countWordsStartingWith("JavaScript is a powerful programming language", "p"),
);
console.log(
  countWordsStartingWith(
    "A journey of a thousand miles begins with a single step",
    "s",
  ),
);
