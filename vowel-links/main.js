function vowelLinks(str) {
  const words = str.split(' ');
  const vowels = 'aeiouAEIUO'.split('');
  for (let i = 0; i < words.length - 1; i++) {
    if ((vowels.indexOf(words[i].slice(-1)) > -1) && (vowels.indexOf(words[i + 1][0]) > -1)) {
      return true;
    }
  }
  return false;
}
