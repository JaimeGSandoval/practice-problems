// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCase = text.toLowerCase();
  const result = [];

  for (const char of lowerCase) {
    const temp = alphabet.indexOf(char);
    if (temp !== -1) {
      result.push(temp + 1);
    }
  }

  return result.join(' ');
};

function alphabetPosition2(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return text
    .toLowerCase()
    .split('')
    .filter((letter) => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(' ');
}
