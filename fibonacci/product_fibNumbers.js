// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true]

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false]

// F(n) being the smallest one such as F(n) * F(n+1) > prod

function productFib(prod) {
  var n = 0;
  var nPlus = 1;
  while (n * nPlus < prod) {
    console.log('prod', n * nPlus);
    nPlus = n + nPlus; // nPlus = 1 nPlus = 2 nPlus = 3 nPLus = 5 nPlus = 8 nPlus = 13 nPlus = 21 nPlus = 34 nPlus = 55 nPlus = 89
    console.log('nPlus', nPlus);
    n = nPlus - n; // n = 1 n = 1 n = 2 n = 3 n = 5 n = 8 n = 13 n = 21 n = 34 n = 55
    console.log('n', n);
  }
  return [n, nPlus, n * nPlus === prod];
}

console.log(productFib(4895)); // [55, 89, true]
// console.log(productFib(5895)); // [89, 144, false];
