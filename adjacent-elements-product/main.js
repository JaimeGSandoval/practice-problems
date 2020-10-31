function adjacentElementsProduct(inputArray) {
  let product = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > product) {
      product = inputArray[i] * inputArray[i + 1];
    }
  }
  return product;
}

const testArr = [2, 4, 9, -3, -9, 7];

console.log(adjacentElementsProduct(testArr));
