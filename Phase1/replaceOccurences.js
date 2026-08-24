const replaceOccurences = (str, target, replacement) => {
  let newStr = "";

  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] === target) {
      newStr += replacement;
    } else {
      newStr += str[i];
    }
  }
  console.log(
    `The new string after replacing ${target} with ${replacement} is: ${newStr}`,
  );
};

replaceOccurences("aaabbbb", "b", "c");
