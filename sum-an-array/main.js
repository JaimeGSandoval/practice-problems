// Sum an Array

var numbersArray = [10, 5, 3, 7, 2];
var numbersArray2 = [1, 2, 3, 4, 5];
var numbersArray3 = [5, 3, 7, 4];

function sumArray(array) {
  var sum = null;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

sumArray(numbersArray);
sumArray(numbersArray2);
sumArray(numbersArray3);

const sumArray2 = (array) => {
  array = array || [];
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => (a += b), 0);
};
