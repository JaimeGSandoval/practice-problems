function isObject(value) {
  return value instanceof Object;
}


function isObject(value) {
  return value === Object(value);
}

function isObject(value) {
  return typeof value === "object" && value !== null;
}


function isObject(value) {
  if (!value) return false;
  return typeof value === 'object';
}
