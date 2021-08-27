// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

const arrayDiff = (a, b) => {
  const result = a.filter((num) => {
    if (!b.includes(num)) {
      return num;
    }
  });
  return result;
};

const arrayDiff2 = (a, b) => a.filter((num) => !b.includes(num));

arrayDiff([1, 2], [1]); // [2];
