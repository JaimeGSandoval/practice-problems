// "Why do we start the loop at 2 instead of 0?".
// The answer is simple - because for n equal to 0 or 1, we can return that number, because as we already know - F(0) = 0, F(1) = 1.

// const fib1 = (num) => {
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
// const fib2 = (num) => {
//   let numBeforePrevVal = 0;
//   let prevVal = 1;

//   for (let i = 2; i <= num; i++) {
//     prevVal = prevVal + numBeforePrevVal; // 1 2 3 5 8 13 21
//     numBeforePrevVal = prevVal - numBeforePrevVal; // 1 1 2 3 5 8 13
//   }

//   return prevVal;
// };

const fib3 = (len) => {
  const result = [0, 1];
  let num1 = result[0];
  let num2 = result[1];
  let next;
  let count = 2;

  while (count <= len) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    count++;

    result.push(next);
  }

  return result;
};

// console.log(fib1(8));
// console.log(fib2(8));
console.log(fib3(15));
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
