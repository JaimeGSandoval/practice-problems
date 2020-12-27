/* eslint-disable no-prototype-builtins */
// Generic Mix-in Function Example to copy all the properties of an object

function mix() {
  let arg, prop, child = {};

  for (arg = 0; arg < arguments.length; arg += 1) {
    for (prop in arguments[arg]) {
      // eslint-disable-next-line no-prototype-builtins
      if (arguments[arg].hasOwnProperty(prop)) {
        child[prop] = arguments[arg][prop];
      }
    }
  }
  return child;
}

const cake = mix(
  { eggs: 2, large: true },
  { butter: 1, salted: true },
  { flour: "3 cups" },
  { sugar: "sure!" }
);


// Copying Properties

function extend(parent, child) {
  child = child || {};
  for (let i in parent) {
    // eslint-disable-next-line no-prototype-builtins
    if (parent.hasOwnProperty(i)) {
      child[i] = parent[i];
    }
  }
  return child;
}


// Example of Deep Copy of another object which checks whether the property is an object or not

function extendDeep(parent, child) {
  let toStr = Object.prototype.toString,
    astr = "[object Array]";

  child = child || {};

  for (let i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === "object") {
        child[i] = (toStr.call(parent[i] === astr) ? [] : {});
        extendDeep(parent[i] = child[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }
  return child;
}

const dad = {
  counts: [1, 2, 3],
  read: { paper: true }
};

let kid = extendDeep(dad);

kid.counts.push(4);
kid.counts.toString(); // "1 2 3 4"
dad.counts.toString(); // "1, 2, 3"

dad.reads === kid.reads; // false
// kid.reads.paper = false;
// kid.reads.web = true;
// dad.reads.paper; // true
