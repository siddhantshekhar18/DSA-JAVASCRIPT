const countWordsContaining = (str, targetChar) => {
  let count = 0;
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (currentWord.includes(targetChar)) {
        count++;
      }
      currentWord = "";
    }
  }
  if (currentWord.includes(targetChar)) {
    count++;
  }
  return count;
};

console.log(
  countWordsContaining("The quick brown fox jumps over the lazy dog", "o"),
);
console.log(
  countWordsContaining("JavaScript is a powerful programming language", "a"),
);
console.log(
  countWordsContaining(
    "A journey of a thousand miles begins with a single step",
    "e",
  ),
);
