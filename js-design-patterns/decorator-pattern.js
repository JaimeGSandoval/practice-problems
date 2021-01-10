// Decorator design pattern allows you to attach additional responsibilities to an already existing object dynamically/at run time without altering its existing structure
// Decorators provide a flexible alternative to sub classing for extending functionality
// Falls under the Structural Design pattern and is also known as a wrapper pattern

// Decorator pattern can help when working with legacy code. It's easier to modify existing code with the decorator pattern

// Implementation guidelines:
// 1. Needs to add responsibilities to individual objects dynamically and transparently
// 2. The extension by sub classing is impractical
// 3. Class definition may be hidden
// 4. Classes are unavailable for sub classing

// Example 1

function Sale(price) {
  this.price = price || 100;
  this.decorators_list = [];
}

Sale.decorators = {};

Sale.decorators.fedTax = {
  getPrice: function (price) {
    return price + price * 5 / 100;
  }
};

Sale.decorators.quebec = {
  getPrice: function (price) {
    return price + price * 7.5 / 100;
  }
};

Sale.decorators.money = {
  getPrice: function (price) {
    return '$' + price.toFixed(2);
  }
};

Sale.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator);
};

Sale.prototype.getPrice = function () {
  let price = this.price,
    max = this.decorators_list.length,
    name;

  for (let i = 0; i < max; i++) {
    name = this.decorators_list[i];
    price = Sale.decorators[name].getPrice(price);
  }

  return price;
};

const sold = new Sale(200);

// Example 2

// A vehicle constructor
function vehicle(vehicleType) {
  // Some defaults
  this.vehicleType = vehicleType;
  this.model = 'default';
  this.license = '0000-000';
}

// Test instance for a basic vehicle
const testInstance = new vehicle('car');
// outputs 'vehicle {vehicleType: 'car', model: 'default', license: '0000-000'}
console.log(testInstance);

// Create a new instance of vehicle to be decorated
let truck = new vehicle('truck');

// New functionality we're decorating vehicle with
truck.setModel = function (modelName) {
  this.model = modelName
};

truck.setColor = function (color) {
  this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setColor('green');
truck.setModel('Tacoma');

console.log(truck);

// Demonstrate 'vehicle' is still unaltered
const secondInstance = new vehicle('car');
console.log(secondInstance);


// Example 3

// The constructor to decorate
function MacBook() {
  this.cost = function () {
    return 997;
  };
  this.screenSize = function () {
    return 11.6;
  };
}

// Decorator 1
function Memory(macbook) {
  let v = macbook.cost();
  macbook.cost = function () {
    return v + 75;
  }
}

// Decorator 2
function Engraving(macbook) {
  let v = macbook.cost();
  macbook.cost = function () {
    return v + 200;
  };
}

// Decorator 3
function Insurance(macbook) {
  let v = macbook.cost();
  macbook.cost = function () {
    return v + 250;
  };
}

const mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

// outputs 1522
console.log(mb.cost());

// outputs 11.6
console.log(mb.screenSize());
