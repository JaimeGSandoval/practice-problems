function lineLength([x1, y1], [x2, y2]) {
  return +Math.hypot(x1 - x2, y1 - y2).toFixed(2);
}
