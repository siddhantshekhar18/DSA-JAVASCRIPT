const string2 = (str) => {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i];
      result += count;
      count = 1;
    }
  }
  console.log(result);
};

string2("programming");
