function order(words) {
  var array = words.split(' ');
  var sortedArray = [];
  for (i = 1; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}


function order2(words) {
  return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}

function order3(words) {
  return words.split(' ').sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}
