const largestArray = (arr) => {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log("The largest number in the array is: " + largest);
};
largestArray([1, 2, 5, 6, 3, 4, 6, 755, 43, 54]);
