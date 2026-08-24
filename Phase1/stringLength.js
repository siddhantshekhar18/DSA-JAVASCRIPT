const stringLength = (str) => {
  let count = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  console.log(`The length of the string is ${count}`);
};
stringLength("Siddhant Shekhar");
