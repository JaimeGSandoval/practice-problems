function tempConversion(celsius) {
  let f = +(celsius * 9 / 5 + 32).toFixed(2)
  let k = +(celsius + 273.15).toFixed(2)

  return k < 0 ? "Invalid" : [f, k]
}
