const balance = (left, right) => {
  let leftWeight = calculateValue(left);
  let rightWeight = calculateValue(right);

  if (leftWeight === rightWeight) {
    return 'Balance';
  } else if (leftWeight > rightWeight) {
    return 'Left';
  } else {
    return 'Right';
  }
};

const calculateValue = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '!') {
      result += 2;
    }

    if (str[i] === '?') {
      result += 3;
    }
  }

  return result;
};


const balance = (left, right) => {
  let leftWeight = Array.from(left).reduce((acc,curr)=> acc += curr === '!' ? 2 : 3 , 0);
  let rightWeight = Array.from(right).reduce((acc,curr)=> acc += curr === '!' ? 2 : 3 , 0);

  if (leftWeight === rightWeight) {
    return 'Balance';
  } else if (leftWeight > rightWeight) {
    return 'Left';
  } else {
    return 'Right';
  }
