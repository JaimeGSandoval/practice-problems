function operation(a, b, op) {
  let num1 = +a, num2 = +b;
  if (op === 'add') return num1 + num2;
  if (op === 'subtract') return num1 - num2;
  if (op === 'multiply') return num1 * num2;
  if (op === 'divide' && num2 == 0) {
    return "undefined"
  } else {
    return num1 / num2;
  }
}


// function operation(a, b, op) {
//   let c = parseInt(a)
//   let d = parseInt(b)
//   let e = op == "add" ? c + d
//     : op == "subtract" ? c - d
//       : op == "multiply" ? c * d
//         : c / d

//   return e == Infinity ? "undefined" : e

// }
