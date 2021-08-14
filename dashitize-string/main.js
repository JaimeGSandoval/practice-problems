// DASHATIZE IT
// Given a variable n,
// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
// If n is not an integer, return an empty value.

const dashatize = (num) => {
  return String(num)
    .replace(/([13579])/g, '-$1-') // finds odd number
    .replace(/--+/g, '-') // replaces double dashes w/ single dashes
    .replace(/(^-|-$)/g, ''); // remove dashes from beginning end of string
};

function dashatize(num) {
  return (num = num
    .toString()
    .split('')
    .map(function (c) {
      return c % 2 ? '-' + c + '-' : c;
    })
    .join('')
    .split('-')
    .filter((a) => a != '')
    .join('-'));
}

// *** the following 3 functions combine to solve the problem
function dashatize(num) {
  let numStr = addDashes(num.toString());
  return stripDashes(numStr);
}

function addDashes(str) {
  return str.replace(/([13579])/g, '-$1-');
}

function stripDashes(str) {
  return str.replace(/--/g, '-').replace(/^-|-$/g, '');
}
