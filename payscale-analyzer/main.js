// Define a function named payscaleAnalyzer which takes in an array of hourly wages and returns the numeric difference between the highest and lowest wages


function payScaleAnalyzer(payList) {
  var highest = payList[0];
  var lowest = payList[0];
  for (var i = 0; i < payList.length; i++) {
    if (payList[i] > highest) {
      highest = payList[i];

    }
  }
  for (var x = 0; x < payList.length; x++) {
    if (payList[x] < lowest) {
      lowest = payList[x];
    }
  }
  return highest - lowest

}

// function payScaleAnalyzer(payList) {
//   payList.sort();

//   return payList[payList.length - 1] - payList[0];

// }

payScaleAnalyzer([28, 34, 21, 39])   // -> 18
payScaleAnalyzer([18, 22, 19, 26])   // -> 8
payScaleAnalyzer([41.50, 27.25, 32.50, 29.60])  // -> 14.25
