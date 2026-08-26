const firstRepeatingCharacter = (str) => {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] > 1) {
      return str[i];
    }
  }
  return null;
};

console.log(firstRepeatingCharacter("abccdeff"));
console.log(firstRepeatingCharacter("abc"));
console.log(firstRepeatingCharacter("abccdde"));
