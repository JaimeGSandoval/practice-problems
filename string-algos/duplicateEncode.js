// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const duplicateEncode = (word) => {
  word = word.toLowerCase() || word;

  return word
    .split('')
    .map((char) => {
      if (
        word.indexOf(char.toLowerCase()) !==
        word.lastIndexOf(char.toLowerCase())
      ) {
        return ')';
      } else {
        return '(';
      }
    })
    .join('');
};

const duplicateEncode2 = (word) => {
  return word
    .toLowerCase()
    .split('')
    .map((char, _, arr) =>
      arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')'
    )
    .join('');
};

duplicateEncode('recede'); // ()()()
duplicateEncode2('din'); // (((
