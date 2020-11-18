function bubbleSort(arr) {
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([7, 5, 2, 4, 3, 9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9, 7, 5, 4, 3, 1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1, 2, 3, 4, 5, 6]); //[1, 2, 3, 4, 5, 6]


function selectionSort(arr) {
  var minIdx, temp;
  for (var i = 0; i < arr.length; i++) {
    minIdx = i; //  i = 0
    for (var j = i + 1; j < arr.length; j++) { // j = 1
      // arr[i] = arr[0]  arr[minIdx] = arr[1]
      if (arr[j] < arr[minIdx]) {
        minIdx = j; // minIdx = 1
      }
    }
    temp = arr[i]; // temp = arr[0]
    arr[i] = arr[minIdx]; // arr[i] = arr[1]
    arr[minIdx] = temp; // arr[minIdx] = arr[0]
  }
  return arr;
}

selectionSort([7, 5, 2, 4, 3, 9]);
selectionSort([9, 7, 5, 4, 3, 1]);
selectionSort([1, 2, 3, 4, 5, 6]);
