const allTruthy = (...args) => args.every(Boolean);

function allTruthy(...args) {
  return args.every(arg => arg)
}

function allTruthy(...args) {
  return args.every((arg) => !arg ? false : true);
}
