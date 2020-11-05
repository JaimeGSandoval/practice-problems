function error(n) {
  const errors = ["Check the fan: e1", "Emergency stop: e2", "Pump Error: e3", "c: e4", "Temperature Sensor Error: e5"]
  if (!errors[n - 1]) {
    return 101;
  }
  return errors[n - 1];
}
