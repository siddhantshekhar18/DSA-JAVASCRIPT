const findShortestWord = (str) => {
  let currentWord = "";
  let shortestWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (shortestWord === "" || currentWord.length < shortestWord.length) {
        shortestWord = currentWord;
      }
      currentWord = "";
    }
  }
  if (shortestWord === "" || currentWord.length < shortestWord.length) {
    shortestWord = currentWord;
  }
  return shortestWord;
};

console.log(findShortestWord("The quick brown fox jumps over the lazy dog"));
console.log(findShortestWord("JavaScript is a powerful programming language"));
console.log(
  findShortestWord("A journey of a thousand miles begins with a single step"),
);
console.log(findShortestWord("Hello"));
