function isScalable(arr) {
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1] > 5) && (arr[i] + arr[i + 1] > 5)) {
      return false;
    }
  }
  return true;
}


// function isScalable(arr) {
//   for (i = 1; i < arr.length; i++) {
//     if (!((arr[i] - arr[i - 1]) <= 5)) return false;
//   }
//   return true;
// }
