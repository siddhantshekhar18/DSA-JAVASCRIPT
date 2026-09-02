const countWordsOfLength = (str, targetLength) => {
  let count = 0;
  let currentLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentLength++;
    } else {
      if (currentLength === targetLength) {
        count++;
      }
      currentLength = 0;
    }
  }
  if (currentLength === targetLength) {
    count++;
  }
  return count;
};

console.log(
  countWordsOfLength("The quick brown fox jumps over the lazy dog", 3),
);
console.log(
  countWordsOfLength("JavaScript is a powerful programming language", 2),
);
console.log(
  countWordsOfLength(
    "A journey of a thousand miles begins with a single step",
    1,
  ),
);
