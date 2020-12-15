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

console.log('square', square(30000));
console.log('square', square(30000));
console.log('square', square(30000));
console.log('square', square(30000));


const aMemoizationFunc = function (parameter) {
  'use strict';

  if (!aMemoizationFunc.memoCache[parameter]) {
    let result = {};
    console.log('Bankai City');
    result.parameter = parameter;
    aMemoizationFunc.memoCache[parameter] = result;
  }
  return aMemoizationFunc.memoCache[parameter];
}

// Attaching an attribute name memoCache to the aMemoizationFunc function object
aMemoizationFunc.memoCache = {};

console.log(aMemoizationFunc(2000))
console.log(aMemoizationFunc(2000))
console.log(aMemoizationFunc(2000))
console.log(aMemoizationFunc(2000))


const aMemoizationFunc2 = function (par1, par2) {
  'use strict';

  let slice = Array.prototype.slice;
  let key = JSON.stringify(slice.call(arguments));

  if (!aMemoizationFunc2.memoCache[key]) {
    let result = {};
    console.log('Bankai City');
    result.par1 = par1;
    result.par2 = par2;
    aMemoizationFunc2.memoCache[key] = result;
  }
  return aMemoizationFunc2.memoCache[key];
}

// Attaching an attribute name memoCache to the aMemoizationFunc function object
aMemoizationFunc2.memoCache = {};


let fibonacci = function () {
  'use strict';
  let cache = [0, 1];

  let fib = function (n) {
    let result = cache[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      cache[n] = result;
    }
    return result;
  }
  return fib;
}();
