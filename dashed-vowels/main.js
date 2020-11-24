const dashed = str => str.replace(/[aeiou]/gi, '-$&-');

function dashed(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").map(char => vowels.includes(char.toLowerCase()) ? `-${char}-` : char).join("");
}

function dashed(str) {
  let vow = 'aeiouAEIOU';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (vow.includes(str[i])) result += '-' + str[i] + '-';
    else result += str[i];
  }
  return output;
}

function dashed(str) {
  const splitStr = str.split('');
  const hash = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  }
  let result = '';
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].toLowerCase() === hash[str[i].toLowerCase()]) {
      result += '-' + splitStr[i] + '-';
    } else {
      result += splitStr[i]
    }
  }
  return result;
}
