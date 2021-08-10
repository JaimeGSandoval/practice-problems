// Find the Stray Number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

const stray = (numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] === sortedNumbers[1]
    ? sortedNumbers[sortedNumbers.length - 1]
    : sortedNumbers[0];
};

const array1 = [4, 4, 4, 8, 4]; // sorted = [4, 4, 4, 4, 8]
const array2 = [8, 4, 8, 8, 8]; // sorted = [4, 8, 8, 8, 8]

console.log(stray(array1)); // returns 8
console.log(stray(array2)); // returns 4
