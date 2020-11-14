function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(...arr[i]);
  }
  return arr2;
}

// function flatten(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2 = arr2.concat(arr[i]);
//   }
//   return arr2;
// }

// function flatten(arr) {
//   let arr2 = [];
//   return [].concat(...arr)
// }
