const findShortestWordLength = (str) => {
  let currentLength = 0;
  let shortestLength = Infinity;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentLength++;
    } else {
      if (currentLength > 0 && currentLength < shortestLength) {
        shortestLength = currentLength;
      }

      currentLength = 0;
    }
  }

  // Check the final word
  if (currentLength > 0 && currentLength < shortestLength) {
    shortestLength = currentLength;
  }

  return shortestLength;
};

console.log(
  findShortestWordLength("The quick brown fox jumps over the lazy dog"),
);
console.log(
  findShortestWordLength("JavaScript is a powerful programming language"),
);
console.log(
  findShortestWordLength(
    "A journey of a thousand miles begins with a single step",
  ),
);
