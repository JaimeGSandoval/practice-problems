function removeABC(str) {
  const removeLetters = str.replace(/[abc]/g, '');
  return str === removeLetters ? null : removeLetters;
}
