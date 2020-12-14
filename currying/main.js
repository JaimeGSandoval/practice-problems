function add(x, y) {
  return x + y;
}

// currying function
function schonfinkelize(fn) {
  var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1);
  return function () {
    var new_args = slice.call(arguments),
      args = stored_args.concat(new_args);
    return fn.apply(null, args);
  };
}


// curry a function to get a new function
var newAdd = schonfinkelize(add, 5);
console.log(newAdd(4))
