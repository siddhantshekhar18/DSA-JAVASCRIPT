const countSubStrings = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      count++;
    }
  }
  return count;
};

console.log(countSubStrings("abc")); // 6
console.log(countSubStrings("hello")); // 15
console.log(countSubStrings("a")); // 1
