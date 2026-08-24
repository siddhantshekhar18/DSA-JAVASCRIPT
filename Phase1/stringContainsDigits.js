const stringContainsDigits = (str) => {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code >= 48 && code <= 57) {
      return true;
    } else {
        return false;
    }
  }
  return false;
};

console.log(stringContainsDigits("hello123"));
console.log(stringContainsDigits("hello"));
console.log(stringContainsDigits("123"));
