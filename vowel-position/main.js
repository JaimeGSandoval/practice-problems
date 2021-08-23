const checkVowel = (string, position) => /[aeiou]/i.test(string[position] || ``;

const checkVowel2 = (string, position) => {
  const vowels = /[aeiouAEIOU]/;
  return string[position] === undefined || !string[position].match(vowels)
    ? false
    : true;
};
