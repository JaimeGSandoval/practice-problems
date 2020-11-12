function toArray(obj) {
  const output = [];
  for (let i in obj) {
    output.push([i, obj[i]])
  }
  return output;
}

// function toArray(obj) {
//   return Object.defineProperties(obj);
// }
