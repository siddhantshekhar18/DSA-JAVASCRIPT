const countWords = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
      count++;
    }
  }
  return count;
};
console.log(countWords("Hello World! This is a test."));
console.log(countWords(" I love coding "));
console.log(countWords("Hello World       is a test."));
