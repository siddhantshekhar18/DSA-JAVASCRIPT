const allCharactersUnique = (str) => {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }
  for (let char in frequency) {
    if (frequency[char] !== 1) {
      return false;
    }
  }
  return true;  
};

console.log(allCharactersUnique("abcdefg"));
console.log(allCharactersUnique("Programming"));
console.log(allCharactersUnique("opkijuhygtfrdeswaq"));
