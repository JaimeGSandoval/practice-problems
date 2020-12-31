const timeFinder = /\d{ 2}:\d{ 2}/;
const emptyString = /^$/;
const characterClass = /\S\?$/;

// Remove all vowels with regular expressions
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
