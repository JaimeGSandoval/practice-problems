// Reverse a String
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    console.log('Error');
    return;
  }
  const result = str.split('').reverse().join('');
  return result;
}

reverse('chidori bankai rasengan');
reverse('test test test');

// Andrei's answer
const reverse2 = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Error';
  }

  let backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
};

reverse2('bankai bankai bankai');

// [0, 3, 4, 31], [4, 6, 30] --> [0, 3, 4, 4, 6, 30, 31]

const mergeSorted = (arr1, arr2) => {
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log('Error with input');
    return;
  }
  return arr1.concat(arr2).sort((a, b) => a - b);
};

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
const combinedArrays = mergeSorted(array1, array2);
console.log(combinedArrays);

// Andrei's answer. Example of hard to read code
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }

  if (array2.length == 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      // Could put this logic in a separate small function
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      // Could put this logic in a separate small function
      mergedArray.push(array2Item);
      array2Item = array2Item[j];
      j++;
    }
  }
  return mergedArray;
}
