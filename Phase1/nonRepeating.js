const nonRepeating = (str) => {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      console.log(str[i]);
      return;
    }
  }
};
nonRepeating("aabbssccffrrrh");
