function jazzify(arr) {
  let result = arr.map(item => !item.includes('7') ? item + '7' : item);
  return result;
}


function jazzify(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    !arr[i].includes('7') ? result.push(arr[i] + '7') : result.push(arr[i]);
  }
  return result;
}

function jazzify(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes('7')) result.push(arr[i] + '7');
    else result.push(arr[i]);
  }
  return result;
}
