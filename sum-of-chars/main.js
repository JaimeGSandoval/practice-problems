// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

const compare = (s1, s2) => {
  let sum1 = 0;
  let sum2 = 0;

  if (!s1 || s1.search(/[^a-zA-Z]+/) !== -1) s1 = '';
  if (!s2 || s2.search(/[^a-zA-Z]+/) !== -1) s2 = '';

  s1.toUpperCase()
    .split('')
    .map((item) => (sum1 += item.charCodeAt(0)));
  s2.toUpperCase()
    .split('')
    .map((item) => (sum2 += item.charCodeAt(0)));

  return sum1 === sum2;
};

const compare = (s1, s2) => {
  let sum1 = 0;
  let sum2 = 0;

  if (!s1 || s1.search(/[^a-zA-Z]+/) !== -1) s1 = '';
  if (!s2 || s2.search(/[^a-zA-Z]+/) !== -1) s2 = '';

  s1.toUpperCase()
    .split('')
    .map((item) => (sum1 += item.charCodeAt(0)));
  s2.toUpperCase()
    .split('')
    .map((item) => (sum2 += item.charCodeAt(0)));

  return sum1 === sum2;
};

compare('AD', 'BC'); // true
compare('AD', 'DD'); // false
