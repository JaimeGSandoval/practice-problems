function product(arr) {
  let newArr = [];
  newArr = createObj(arr);
  if (newArr.length < 2) return newArr[0] * newArr[0];
  return newArr[newArr.length - 1] * newArr[newArr.length - 2];
}

function createObj(array) {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    hash[array[i]] = array[i]
  }
  return Object.values(hash).sort((a, b) => a - b);
}


const product = arr => {
  const uniqs = [...new Set(arr)].sort((a, b) => a - b);
  const max = uniqs.pop();
  return max * (uniqs.length ? uniqs.pop() : max);
};
