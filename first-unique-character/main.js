// "use strict";

// function firstUniqChar(str) {
//   const hash = {};
//   for (const char of str) {
//     if (hash[char]) {
//       hash[char]++;
//     }
//     else {
//       hash[char] = 1;
//     }
//   }

//   for (const letter in hash) {
//     if (hash[letter] === 1) {
//       return str.indexOf(letter);
//     }
//   }

//   return -1;
// };

// const test = 'qqlllooddw';

// // Example 2 Optimized version

// function firstUniqChar2(str) {
//   const hash = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (hash[char]) {
//       hash[char][0]++;
//     }
//     else {
//       hash[char] = [1, i];
//     }
//   }

//   for (const letter in hash) {
//     if (hash[letter][0] === 1) {
//       return hash[letter][1];
//     }
//   }
//   return -1;
// };

// const test2 = 'qqlllooddw';

const specialNumber = (n) => {
  let test = n.toString().split('');
  console.log(test);
  for (let i = 0; i < test.length; i++) {
    const temp = Number(test[i]);
    if (temp > 5) {
      console.log(test[i]);
      return 'NOT!!';
    }
  }
  return 'Special!!';
};

console.log(specialNumber(11));
