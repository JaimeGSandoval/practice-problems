
function phAnalyzer(str) {
  var num = Number(str);
  if (num >= 0 && num <= 4) {
    return 'acidic';
  } else if (num >= 5 && num <= 8) {
    return 'neutral';
  } else if (num >= 9 && num <= 14) {
    return 'alkaline';
  } else {
    return 'invalid pH value';
  }
}

phAnalyzer('1');
phAnalyzer('7');
phAnalyzer('11');
phAnalyzer('42');
