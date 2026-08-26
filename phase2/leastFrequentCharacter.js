const leastFrequentCharacter = (str) => {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }
  let minCount = Infinity;
  let minChar = "";

  for (let char in frequency) {
    if (frequency[char] < minCount) {
      minCount = frequency[char];
      minChar = char;
    }
  }
  return minChar;
};

console.log(leastFrequentCharacter("Siddhant"));
console.log(leastFrequentCharacter("Programming"));
console.log(leastFrequentCharacter("Hello World"));
