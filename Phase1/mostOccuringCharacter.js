const mostOccuringCharacter = (str) => {
  let maxCount = 0;
  let maxChar = "";

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxChar = str[i];
    }
  }
  console.log("most Occuring character is: " + maxChar);
};

mostOccuringCharacter("aabbssccffrrrh");
