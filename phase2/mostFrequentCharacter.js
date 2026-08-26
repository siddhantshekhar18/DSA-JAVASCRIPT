const mostFrequentCharacter = (str) => {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }
  let maxCount = 0;
  let maxChar = "";

  for (let char in frequency) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }
  return maxChar;
};

console.log(mostFrequentCharacter("Siddhant"));
