// Take a Number And Sum Its Digits Raised To The Consecutive Powers
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

const sumDigPow = (a, b) => {
  const arr = [];
  for (let i = 0; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j < String(i).length; j++) {
      sum += Math.pow(parseInt(String(i), j + 1));
      if (sum === i) arr.push(i);
    }
  }
  return arr;
};

sumDigPow(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumDigPow(1, 100); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89];
sumDigPow(90, 100); // [];
