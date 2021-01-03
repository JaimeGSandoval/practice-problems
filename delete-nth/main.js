// ES6 version arrow function for parent function and ES6 arrow function for filter method
const deleteNth1 = (arr, n) => {
  let obj = {};
  return arr.filter(num => (
    obj[num] = (obj[num] || 0) + 1,
    obj[num] <= n
  ));
}

// ES6 arrow function for parent function. ES5 function for filter method
const deleteNth2 = (arr, n) => {
  let obj = {};
  return arr.filter(function (num) {
    obj[num] = (obj[num] || 0) + 1;
    return obj[num] <= n;
  });
}

// ES5 version for parent function and filter method
function deleteNth3(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}


deleteNth1([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
deleteNth2([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
deleteNth3([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
