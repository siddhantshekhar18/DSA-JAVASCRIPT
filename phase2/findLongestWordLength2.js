const findLongestWordLength2 = (str) => {
  let currentLength = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = 0;
    }
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
};

console.log(
  findLongestWordLength2("The quick brown fox jumps over the lazy dog"),
);
console.log(
  findLongestWordLength2("JavaScript is a powerful programming language"),
);
console.log(
  findLongestWordLength2(
    "A journey of a thousand miles begins with a single step",
  ),
);
