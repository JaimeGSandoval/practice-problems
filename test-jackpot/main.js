function testJackpot(result) {
  const isEqual = (item) => item === result[0];
  return result.every(isEqual);
}

// function testJackpot(result) {
//   return result.every(item => item === result[0]);
// }
