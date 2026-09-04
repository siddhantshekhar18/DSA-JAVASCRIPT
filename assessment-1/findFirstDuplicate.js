const findFirstDuplicate = (str) => {
  const seenChars = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seenChars.has(char)) {
      return char;
    }
    seenChars.add(char);
  }
  return null;
};

console.log(findFirstDuplicate("abca"));
console.log(findFirstDuplicate("abcdef"));
