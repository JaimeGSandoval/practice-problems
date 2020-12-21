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

console.log(cake);
