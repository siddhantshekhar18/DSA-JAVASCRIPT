const findUniqueCharacters = (str) => {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }
  let uniques = [];

  for (let char in frequency) {
    if (frequency[char] === 1) {
      //if(frequency[char] == 1){         (is also valid)
      uniques.push(char);
    }
  }
  return uniques;
};

console.log(findUniqueCharacters("Programming"));
console.log(findUniqueCharacters("Hello World"));
console.log(findUniqueCharacters("Siddhant"));
