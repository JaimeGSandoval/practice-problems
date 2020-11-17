function squareDigits(n) {
  let split = n.toString().split('');
  let temp = '';
  for (let i = 0; i < split.length; i++) {
    let numTemp = split[i] * split[i];
    temp += numTemp;
  }
  return Number(temp);
}

// function squareDigits(n) {
//   return +[...String(n)].map(x => x * x).join('');
// }

// const squareDigits = n =>
//   +n.toString().split('').map(x => x * x).join('');
