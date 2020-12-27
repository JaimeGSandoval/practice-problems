"use strict";

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


const pullScores = function (obj, section = 1, callback) {
  let scores = {};

  for (let key in obj.scores) {
    if (key.includes('s' + section)) {
      let val = obj.scores[key];
      if (typeof callback === 'function') {
        val = callback(val);
      }
      scores[key] = val;
    }
  }
  return scores;
};

let newObj = pullScores(learner1, 1, function (val) {
  if (val === null) {
    return 0;
  } else {
    let arr = val.split(':');
    return arr[0] / arr[1] * 100;
  }
});


// Advantages of Callback pattern
// Helps to not have repeating code. You use a generic function but pass in different callback functions to process the value instead of redoing things for each one of those. You simply pass a different function if you want to do something different
// Makes you function more generic and versatile so you can handle several types of functionality
// Makes code more maintainable. One only have to deal with code in the generic function, making it nore maintainable
