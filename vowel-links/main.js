function vowelLinks(str) {
  const hash = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  };

  const lowerStr = str.toLowerCase().split(' ');
  lowerStr.forEach(function (word) {
    console.log(word[word.length - 1]);
  })
}
