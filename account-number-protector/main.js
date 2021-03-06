// Define a function named accountNumberProtector which takes in a string that contains a sixteen digit credit card number and returns only the last four numbers in a string with ** as a prefix


// Return Value
// The last four numbers of the credit card number with "**" as a prefix

// function accountNumberProtector(cardNumberString) {
//   let prefixAccNum = '**';
//   let last4Num = cardNumberString.slice(12);
//   for (let i = cardNumberString - 4; i < last4Num.length; i++) {
//     prefixAccNum += last4Num[i];
//   }
//   return prefixAccNum;

// }


// Uzair's solution
function accountNumberProtector2(cardNumberString) {

  let prefixAccNum = '**';
  for (let i = cardNumberString.length - 4; i < cardNumberString.length; i++) {
    prefixAccNum += cardNumberString[i];
  }
  return prefixAccNum;

}

accountNumberProtector2("5543223485638832") // -> "**8832"
accountNumberProtector2("8934235477210943") // -> "**0943"
accountNumberProtector2("7513635499320192") // -> "**0192"
