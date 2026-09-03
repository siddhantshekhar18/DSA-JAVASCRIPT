const countWordsOneLongerThan = (str, targetLength) => {
  let count = 0;
  let currentLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentLength++;
    } else {
      if (currentLength === targetLength + 1) {
        count++;
      }
      currentLength = 0;
    }
  }
  if (currentLength === targetLength + 1) {
    count++;
  }
  return count;
};

console.log(
  countWordsOneLongerThan("The quick brown fox jumps over the lazy dog", 3),
);
console.log(
  countWordsOneLongerThan("JavaScript is a powerful programming language", 1),
);
