function arrayOfMultiples(num, length) {
  const output = [];
  for (let i = 1; i <= length; i++) {
    output.push(num * i)
  }
  return output;
}


// function arrayOfMultiples(num, length) {
//   return [...Array(length)].map((_, i) => num * (i + 1))
// }
