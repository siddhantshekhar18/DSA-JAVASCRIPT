const printAllSubStrings = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substring = "";

      for (let k = i; k <= j; k++) {
        substring += str[k];
      }
      console.log(substring);
    }
  }
};
printAllSubStrings("abc");
printAllSubStrings("hello");
