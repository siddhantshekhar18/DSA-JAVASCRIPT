const isRotation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const combined = str1 + str1;

  if (combined.includes(str2)) {
    return true;
  }
  return false;
};

console.log(isRotation("ABCD", "CDAB")); // true
console.log(isRotation("ABCD", "ACBD")); // false
console.log(isRotation("hello", "lohel")); // true
console.log(isRotation("hello", "world")); // false
