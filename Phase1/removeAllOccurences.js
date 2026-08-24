const removeAllOccurences = (str, target) => {
  let newStr = "";

  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] === target) {
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
};

removeAllOccurences("aaddcc", "c");
