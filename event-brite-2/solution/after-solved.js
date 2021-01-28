/*
Execute function after x times

Create a function "after" that returns a new function where this
new function executes the original function only after
it has been executed x times
*/

//execute function after x times
function after(num, func) {
  let theFunc = func;
  let count = 0;

  return function () {
    if (count >= num) {
      return theFunc.apply(null, arguments);
    } else {
      count = count + 1;
    }
  };
}
