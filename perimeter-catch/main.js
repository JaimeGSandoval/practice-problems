function perimeter(l, num) {
  return l === 's' ? perimeterOfSquare(num) : perimeterOfCircle(num);
}

function perimeterOfSquare(num) {
  return 4 * num;
}

function perimeterOfCircle(num) {
  return 6.28 * num;
}

function perimeter(l, num) {
  return l === "s" ? 4 * num : 6.28 * num
}
