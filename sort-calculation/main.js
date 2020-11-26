function ascDesNone(arr, str) {
  return result(arr, str);
}

function result(arr, str) {
  if (str === 'Asc') return arr.sort((a, b) => a - b);
  if (str === 'Des') return arr.sort((a, b) => b - a);
  return arr;
}


function ascDesNone(arr, str) {
  return str === 'Asc' ? arr.sort((a, b) => a - b) : str === 'Des' ? arr.sort((a, b) => b - a) : arr;
}


function ascDesNone(arr, str) {
  let result = arr.slice();
  if (str === 'Asc') {
    for (let i = 0; i <= result.length - 2; i++) {
      for (let j = 0; j <= result.length - 2; j++) {
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1]
          result[j + 1] = temp;
        }
      }
    }
    return result;
  }
  if (str === 'Des') {
    for (let i = 0; i <= result.length - 2; i++) {
      for (let j = 0; j <= result.length - 2; j++) {
        if (result[j] < result[j + 1]) {
          let temp = result[j + 1];
          result[j + 1] = result[j]
          result[j] = temp;
        }
      }
    }
    return result;
  }


  return result;
}
