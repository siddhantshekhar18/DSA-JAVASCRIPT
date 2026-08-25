const reverseEachWord = (str) => {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      let reversedWord = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
      }
      result += reversedWord + " ";
      word = "";
    }
  }
  let reversedWord = "";

  for (let j = word.length - 1; j >= 0; j--) {
    reversedWord += word[j];
  }
  result += reversedWord;
  return result;
};

console.log(reverseEachWord("Hello World"));
console.log(reverseEachWord("I love JavaScript"));
console.log(reverseEachWord("hello world"));
