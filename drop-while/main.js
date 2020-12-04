const dropWhile = (arr, fn) => {
  let fnFired = false;
  return arr.reduce((a, b) => (fn(b) && !fnFired ? a : ((fnFired = true), a.push(b), a)), []);
};

const dropWhile = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) { return arr.slice(i); }
  }
}


const dropWhile = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return arr.slice(i)
    }
  }
  return []
}
