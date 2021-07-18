// Description:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

const descendingOrder = (n) => {
  let result = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');

  return parseInt(result);
};

const test = descendingOrder(3456789);
const test2 = descendingOrder(93845635);

console.log(test);
console.log(test2);
