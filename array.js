const findDuplicates = (numbersArray) => {
  let duplicatedArray = [];

  for (let i = 0; i < numbersArray.length; i++) {
    for (let j = i + 1; j < numbersArray.length; j++) {
      if (numbersArray[i] == numbersArray[j]) {
        let alreadyInArray = false;

        for (let k = 0; k < duplicatedArray.length; k++) {
          if (duplicatedArray.includes(numbersArray[i])) {
            alreadyInArray = true;
          }
        }

        if (!alreadyInArray) {
          duplicatedArray.push(numbersArray[i]);
        }
      }
    }
  }

  return console.log(duplicatedArray);
};
findDuplicates([1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 4, 5, 6]);
