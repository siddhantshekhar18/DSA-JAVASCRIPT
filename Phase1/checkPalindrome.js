const checkPalindrome = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (str === reversedStr) {
    console.log("The string is palindrome");
  } else {
    console.log("The string is not palindrome");
  }
};
checkPalindrome("abs");
