function keysAndValues(obj) {
  const keys = [];
  const values = [];

  for (let i in obj) {
    keys.push(i);
    values.push(obj[i])
  }
  return [keys, values];
}


// function keysAndValues(obj) {
//   return [Object.keys(obj), Object.values(obj)];
// }
