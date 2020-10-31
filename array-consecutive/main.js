function makeArrayConsecutive2(statues) {
  var max = statues[0]
  var min = statues[0]
  var i = 0
  while (i < statues.length) {
    if (statues[i] > max) {
      max = statues[i]
    }
    if (statues[i] < min) {
      min = statues[i]
    }
    i++
  }
  return max - min + 1 - statues.length
}

const inputArr = [6, 2, 3, 8];

console.log(makeArrayConsecutive2(inputArr));
