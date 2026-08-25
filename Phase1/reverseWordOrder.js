const reverseWordOrder = (str) => {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      result = word + " " + result;
      word = "";
    }
  }
  result = word + " " + result;
  return result;
};

console.log(reverseWordOrder("Hello World"));
console.log(reverseWordOrder("I love JavaScript"));
console.log(reverseWordOrder("hello world"));
