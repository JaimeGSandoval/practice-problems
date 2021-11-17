// const fib = (num) => {
//   let fib = [];

//   fib[0] = 0;
//   fib[1] = 1;
//   for (let i = 2; i <= num; i++) {
//     // Next fibonacci number = previous + one before previous
//     fib[i] = fib[i - 2] + fib[i - 1];
//     console.log(fib[i]);
//   }

//   return fib[fib.length - 1];
// };

// how to do it without an array
const fib = (num) => {
  let numBeforePrevVal = 0;
  let prevVal = 1;

  for (let i = 2; i <= num; i++) {
    prevVal = prevVal + numBeforePrevVal; // 1 2 3 5 8 13 21
    numBeforePrevVal = prevVal - numBeforePrevVal; // 1 1 2 3 5 8 13
  }

  return prevVal;
};

console.log(fib(8));
// i = 2
// 0 + 1 = 1
// fib[0, 1].push(1)
// fib [0, 1, 1]

// i = 3
// 1 + 1 = 2
// fib[0, 1, 1].push(2)
// fib[0, 1, 1, 2]

// i = 4
// 1 + 2 = 3
// fib[0, 1, 1, 2].push(3)
// fib[0, 1, 1, 2, 3]

// i = 5
// 2 + 3 = 5
// fib[0, 1, 1, 2, 3].push(5)
// fib[0, 1, 1, 2, 3, 5]

// i = 6
// 3 + 5 = 8
// fib[0, 1, 1, 2, 3, 5].push(8)
// fib[0, 1, 1, 2, 3, 5, 8]

// i = 7
// 5 + 8 = 13
// fib[0, 1, 1, 2, 3, 5, 8].push(13)
// fib[0, 1, 1, 2, 3, 5, 8, 13]

// i = 8
//  8 + 13 = 21
// fib[0, 1, 1, 2, 3, 5, 8, 13].push(21)
// fib[0, 1, 1, 2, 3, 5, 8, 13, 21]
