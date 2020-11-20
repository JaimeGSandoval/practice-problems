function clone(arr) {
  arr.push(arr.slice(0))
  return arr
}

function clone(arr) {
  let arr2 = arr.concat();
  arr.push(arr2);
  return arr;
}
