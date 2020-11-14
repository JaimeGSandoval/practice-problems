function capToFront(s) {
  let upperCase = '';
  let lowerCase = '';
  for (let i = 0; i < s.length; i++) {
    s[i] === s[i].toLowerCase() ? lowerCase += s[i] : upperCase += s[i];
  }
  return upperCase + lowerCase;
}

// function capToFront(s) {
//   return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('')
// }
