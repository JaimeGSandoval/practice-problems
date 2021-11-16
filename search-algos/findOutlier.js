// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

const findOutlier = (integers) => {
  const hash = {
    even: { val: 0, index: null },
    odd: { val: 0, index: null },
  };

  integers.forEach((int, i) => {
    if (int % 2 === 0) {
      hash.even.val++;
      hash.even.index = i;
    } else {
      hash.odd.val++;
      hash.odd.index = i;
    }
  });

  return hash.even.val === 1
    ? integers[hash.even.index]
    : integers[hash.odd.index];
};

// better way
function findOutlier(integers) {
  const even = integers.filter((int) => int % 2 === 0);
  const odd = integers.filter((int) => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

findOutlier([0, 1, 2]); // 1
findOutlier([2, 6, 8, 10, 3]); // 3
