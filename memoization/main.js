// hash to store values for memoization
const cache = {};
const addValue = (num, val) => cache[num] = val;
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
  addValue(n, result);
  return result;
}

console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
