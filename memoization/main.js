// A function must have heavy computation and must be a pure function in order for memoization to work. The value for a specific input is calculated and stored within the cache. If the same input is passed through the function again, it won't be calculated. Instead, it'll just look for the value in cache, which is must faster than doing the entire computation again.

// Example of pure function. It does not rely on any outside data for it to work. The input will always match the output
const pureFunction = function (x) {
  return x * x;
}

// Example of non pure function. It relies on outside data for it to work. In this case, the value of the var num.
let num = 5;
const notPureFunction = function (x) {
  return num * x;
}

// hash named cache to store values for memoization
const cache = {};
const storeResult = (num, val) => cache[num] = val;
const square = (n) => {
  let result = 0;
  if (cache[n]) {
    return cache[n];
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  storeResult(n, result);
  return result;
}

console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
