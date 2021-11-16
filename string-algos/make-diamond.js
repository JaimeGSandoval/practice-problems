// Jaime is a programmer, and Jaime's girlfriend, Awkie, likes diamonds. She wants a diamond string from Jaime.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let str = '';
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2); // (n - (2 * i) - 1)
    str += ' '.repeat(len);
    str += '*'.repeat(n - 2 * len); // (n - (2 * len))
    str += '\n';
    console.log(str);
  }
  return str;
}

diamond(3);
// ' * '
// '***'
// ' * '

diamond(5);
// ' * '
//' *** '
//'*****'
//' *** '
//'  *  '
