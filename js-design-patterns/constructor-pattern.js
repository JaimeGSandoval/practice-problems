function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return this.model + ' has done ' + this.miles + ' miles since ' + this.year;
}

const ferrari = new Car('Ferrari Enzo', 2020, 20000);
const corvette = new Car('Chevy Corvette', 2020, 15000);

console.log(ferrari.toString());
console.log(corvette.toString());
