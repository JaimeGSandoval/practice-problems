// Strategy pattern is a pattern in which you encapsulate group of closely related algorithms. These algorithms are called strategies. A strategy is just a function. Strategy pattern allows you to swap different strategies easily.

// Define a family of algorithms, encapsulate each one, and make them interchangeable. The Strategy pattern lets the algorithm vary independently form clients that use it.

// When to use the Strategy pattern?
// When you ant to define a class that will have one behavior that's similar to other behaviors in a list/ When you need to sue one of several behaviors dynamically
// Often reduces long lists of conditionals
// Avoids duplicate code
// Keeps changes from forcing other class changes
// Can hide complicated/ secret code from the user
// Negative: Increased number of objects/classes

// Example: I want the class object to be able to choose from :
// Not flying
// Fly with wings
// Fly super fast

//

function FedEx() {
  this.calculate = package => {
    return 2.45;
  }
}

function UPS() {
  this.calculate = package => {
    return 1.56;
  }
}

function USPS() {
  this.calculate = package => {
    return 4.5;
  }
}

function Shipping() {
  this.company = '';
  this.setStrategy = (company) => {
    this.company = company;
  }

  this.calculate = package => {
    return this.company.calculate(package);
  }
}

const fedex = new FedEx();
const ups = new UPS();
const usps = new USPS();
const package = { from: 'Alabama', to: 'Georgia', weight: 1.56 };

const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log('Fedex: ' + shipping.calculate(package));

shipping.setStrategy(ups);
console.log('UPS: ' + shipping.calculate(package));
