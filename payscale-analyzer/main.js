// Define a function named payscaleAnalyzer which takes in an array of hourly wages and returns the numeric difference between the highest and lowest wages


function payScaleAnalyzer(payList) {
  payList.sort();

  return payList[payList.length - 1] - payList[0];

}

payScaleAnalyzer([28, 34, 21, 39])   // -> 18
payScaleAnalyzer([18, 22, 19, 26])   // -> 8
payScaleAnalyzer([41.50, 27.25, 32.50, 29.60])  // -> 14.25
