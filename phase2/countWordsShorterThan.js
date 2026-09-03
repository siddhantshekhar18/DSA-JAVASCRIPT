const countWordsShorterThan = (str, targetLength) => {
  let count = 0;
  let currentLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentLength++;
    } else {
      if (currentLength < targetLength) {
        count++;
      }
      currentLength = 0;
    }
  }
  if (currentLength < targetLength) {
    count++;
  }
  return count;
};

console.log(
  countWordsShorterThan("The quick brown fox jumps over the lazy dog", 3),
);
console.log(
  countWordsShorterThan("JavaScript is a powerful programming language", 5),
);
console.log(
  countWordsShorterThan(
    "A journey of a thousand miles begins with a single step",
    4,
  ),
);
