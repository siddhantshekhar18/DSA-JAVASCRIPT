const targetOccurenceCount = (str, target) => {
  let count = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] === target) {
      count++;
    }
  }
  console.log("The target character occurs " + count + " times in the string");
};

targetOccurenceCount("aaabbbb", "b");
