// 1. Use closure to avoid globals - place the code in a function
// This removes globals by placing them inside the scope of an initialization function the fires when the window loads
const init = () => {
  const hash = {
    cache: {}
  };
  const addValue = (num, val) => hash.cache[num] = val;
  const square = (n) => {
    let result = 0;
    if (hash.cache[n]) {
      return hash.cache[n];
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result += 1;
      }
    }
    addValue(n, result);
    return result;
  }
  console.log(square(20000));
  console.log(square(20000));
  console.log(square(20000));
}
window.addEventListener('load', init);


// 2. Use an IIFE
(() => {
  const hash = {
    cache: {}
  };
  const addValue = (num, val) => hash.cache[num] = val;
  const square = (n) => {
    let result = 0;
    if (hash.cache[n]) {
      return hash.cache[n];
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result += 1;
      }
    }
    addValue(n, result);
    return result;
  }
  console.log(square(30000));
  console.log(square(30000));
  console.log(square(30000));
})()


// 3. Use a single global object and closure to make certain functions or properties accessible from the outside but still have no global vars
const _GLOBALS = (() => {

  // CLOSURE makes hash and addValue vars private
  const hash = {
    cache: {}
  };
  const addValue = (num, val) => hash.cache[num] = val;

  // Everything returned below will be public
  return {
    addValue: (num, val) => this.hash.cache[num] = val,
    square: (n) => {
      let result = 0;
      if (hash.cache[n]) {
        return hash.cache[n];
      }
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          result += 1;
        }
      }
      addValue(n, result);
      return result;
    }
  }
})()

console.log(_GLOBALS.square(30000))
console.log(_GLOBALS.square(30000))
console.log(_GLOBALS.square(30000))
