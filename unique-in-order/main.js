const uniqueInOrder = iterable => {
    const result = [];

    if(iterable.length < 1) return result;
    let temp1 = null;
    let temp2 = null;

  for (let i = 0; i < iterable.length; i++) {
    temp1 = iterable[i];
    temp2 = iterable[i + 1];

    if(temp1 !== temp2) {
      result.push(temp1);
    }
  }

  return result;
}


const uniqueInOrder2 = () => (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
