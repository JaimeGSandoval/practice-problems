function getBudgets(arr) {
  return arr.reduce((acc, cur) => acc += cur.budget, 0);
}
