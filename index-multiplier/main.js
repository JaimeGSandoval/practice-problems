function indexMultiplier(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * i;
  }
  return total;
}

function indexMultiplier(arr) {
  return arr.reduce((acc, cur, indx) => acc + cur * indx, 0);
}
