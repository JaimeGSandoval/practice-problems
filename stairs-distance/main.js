function totalDistance(height, length, tower) {
  let steps = tower / height;
  return Number((steps * length + steps * height).toFixed(1));
}
