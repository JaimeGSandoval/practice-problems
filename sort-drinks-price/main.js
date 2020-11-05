function sortDrinkByPrice(drinks) {
  let output = drinks.sort((a, b) => {
    return a.price - b.price
  })
  return output;
}
