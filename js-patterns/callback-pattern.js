// Callback pattern
let findNodes = function (callback) {
  let i = 10, // big heavy loop
    nodes = [], // store the result
    found; // the next node found

  // check if callback is callable is callable
  if (typeof callback !== 'function') {
    callback = false;
  }

  while (i) {
    i -= 1;

    // complex logic here...

    // now callback:
    if (callback) {
      callback(found);
    }

    nodes.push(found);
  }
  return nodes;
}

let chidori = function (node) {
  // node.style.display = 'none';
  console.log('chidori');
};

findNodes(chidori);
