function dis(price, discount) {
  const newPrice = price - (price * discount / 100);
  return +newPrice.toFixed(2);
}

console.log(dis(211, 50));
