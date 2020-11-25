function rev(n) {
  let reversed = n.toString().split('').reverse().join('');
  let result = '';
  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] !== '-') {
      result += reversed[i];
    }
  }
  return result;
}

function rev(n) {
  return Math.abs(n).toString().split('').reverse().join('')
}
