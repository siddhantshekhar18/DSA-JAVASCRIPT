const findDuplicateCharacters = (str) => {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }
  let duplicates = [];

  for (let char in frequency) {
    if (frequency[char] > 1) {
      duplicates.push(char);
    }
  }
  return duplicates;
};

console.log(findDuplicateCharacters("Programming"));
console.log(findDuplicateCharacters("Hello World"));
console.log(findDuplicateCharacters("Siddhant"));
