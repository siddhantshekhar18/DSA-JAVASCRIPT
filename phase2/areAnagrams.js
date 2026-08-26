const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (frequency1[str1[i]]) {
      frequency1[str1[i]]++;
    } else {
      frequency1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (frequency2[str2[i]]) {
      frequency2[str2[i]]++;
    } else {
      frequency2[str2[i]] = 1;
    }
  }

  for (let char in frequency1) {
    if (frequency1[char] !== frequency2[char]) {
      return false;
    }
  }
  return true;
};

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("triangle", "integral"));
console.log(areAnagrams("apple", "pale"));
