// To find last digit of a number, we use modulo operator %. When modulo divided by 10 returns its last digit.
// Suppose if n = 1234
// then last Digit = n % 10 => 4
// To finding first digit of a number is little expensive than last digit. To find first digit of a number we divide the given number by 10 until number is greater than 10. At the end we are left with the first digit.

//  When a number is divided by 10, the digits, except the digit at the one's place, make the quotient and the digit at one's place becomes the remainder.

// Thus, when a number is divided by 10, the remainder is always the digit of the unit place and the quotient is the number made by the remaining digits.

// In other words, when we divide a number by 10, the digit at ones place of the given number becomes the remainder and the digits at the remaining places of the number given the quotient.

// Therefore, notice that on dividing by 10, the digit in the ONES place forms the remainder, while the remaining digits form the quotient.

//  When a number is divided by 100, the quotient is the number made by the digits, except the digits at one's and ten's places. The number formed by ten's and one's digit of the dividend number is the remainder.

const digital_root = (n) => {
  console.log('number', n);
  if (n < 10) {
    console.log('final val', n);
    return n;
  }

  const lastDigit = n % 10;
  console.log('last', lastDigit);
  const remainingNum = Math.floor(n / 10);
  console.log('rest', remainingNum);

  return digital_root(lastDigit + digital_root(remainingNum));
};

console.log(digital_root(456));
