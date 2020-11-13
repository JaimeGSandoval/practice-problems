function intWithinBounds(n, lower, upper) {
  if (n % 1 !== 0) {
    return false
  }
  return lower <= n && n < upper;
}


// function intWithinBounds(n, lower, upper) {
//   return Number.isInteger(n) ? n >= lower && n < upper : false
// }
