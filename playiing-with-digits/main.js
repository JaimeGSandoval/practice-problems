// Basicaly you are given a number,n, and a starting point for power numbers,p,
// your goal is to break down n to the digits, and first digit should take the
// power of p, added with the next digit to the power of p+1, and so on and so forth.
// the sum should be divisible to the original number (the remainder should be zero),
// if you have a condition such as this, find out what would be result of the sum/origin value (n).

const digPow = (n, p) => {
  const strNum = n.toString();
  let sum = 0;

  for (let i = 0; i < strNum.length; i++) {
    sum += Math.pow(+strNum[i], p + i);
  }

  if (sum % n === 0) {
    return sum / n;
  }

  return -1;
};

digPow(89, 1); // returns 1
digPow(92, 1); // returns -1
digPow(46288, 3); // returns 51
