// SHORTST WORD
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types

const findShort = (s) => {
  const splitStr = s.split(' ');
  let shortest = splitStr[0];

  splitStr.forEach(
    (word) => (shortest = word.length < shortest.length ? word : shortest)
  );
  return shortest.length;
};

const findShort2 => (s) Math.min(...s.split(' ').map((s) => s.length));
