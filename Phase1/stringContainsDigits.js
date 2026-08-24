const stringContainsDigits = (str) => {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code < 48 || code > 57) {
      return false;
    }
  }
  return true;
};

console.log(stringContainsDigits("123hello123"));
console.log(stringContainsDigits("hello"));
console.log(stringContainsDigits("123"));
console.log(stringContainsDigits("hello123"));
