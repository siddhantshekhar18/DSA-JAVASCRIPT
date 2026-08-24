const secondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  console.log("The second largest number in the array is: " + secondLargest);
};

secondLargest([1, 2, 5, 6, 3, 4, 6, 755, 43, 54]);
