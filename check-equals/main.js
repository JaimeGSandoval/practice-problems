function checkEquals(arr1, arr2) {
  return arr1.every((x, i) => x == arr2[i])
}

// function checkEquals(arr1, arr2) {
//   return arr1.toString() == arr2.toString();
// }

// function checkEquals(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
