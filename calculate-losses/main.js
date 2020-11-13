// function calculateLosses(obj) {
//   if (Object.keys(obj).length === 0) {
//     return 'Lucky you!';
//   }
//   let total = 0;
//   for (let i in obj) {
//     total += obj[i];
//   }
//   return total;
// }

// function calculateLosses(obj) {
//   let sum = 0;
//   for (let ele in obj) {
//     sum += obj[ele];
//   }
//   return sum > 0 ? sum : 'Lucky you!';
// }

function calculateLosses(obj) {
  return Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';
}
