function possibleBonus(a, b) {
  const numRange = b - a;
  return a > b || a === b ? false : numRange <= 6;
}
