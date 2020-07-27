
function phAnalyzer(str) {
  var num = Number(str);
  if (num >= 0 && num <= 4) {
    console.log('acidic');
  } else if (num >= 5 && num <= 8) {
    console.log('neutral');
  } else if (num >= 9 && num <= 14) {
    console.log('alkaline');
  } else {
    console.log('invalid pH value')
  }
}

phAnalyzer('123')
