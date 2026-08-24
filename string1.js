const string1 = "aaabbbdddssseehgee";

let result = "";
let count = 1;

for (let i = 0; i < string1.length; i++) {
  if (string1[i] === string1[i + 1]) {
    count++;
  } else {
    result += string1[i];

    if (count > 1) {
      result += count;
    }
    count = 1;
  }
}
console.log(result);
