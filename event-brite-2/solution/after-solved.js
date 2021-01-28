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
