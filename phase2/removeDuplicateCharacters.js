const removeDuplicateCharacters = (str) => {
  let result = "";
  let seen = new Set();

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }
  return result;
};

console.log(removeDuplicateCharacters("programming"));
console.log(removeDuplicateCharacters("hello world"));
console.log(removeDuplicateCharacters("aabbccddeeff"));
