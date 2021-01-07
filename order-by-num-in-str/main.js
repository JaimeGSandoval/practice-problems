function order(words) {
  var array = words.split(' ');
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      console.log(array[j])
      if (array[j].indexOf(i) >= 0) {
        console.log(array[j].indexOf(i))
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
const string = 'tes4t 2test te3st 1test test5';

console.log(order(string));

function order2(words) {
  return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}

function order3(words) {
  return words.split(' ').sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}
