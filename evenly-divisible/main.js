function evenlyDivisible(a, b, c) {
  let result = 0
  for (let i = a; i <= b; i++) {
    if (i % c === 0) result += i;
  }
  return result;
}
