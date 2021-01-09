// Strategy pattern is a pattern in which you encapsulate group of closely related algorithms. These algorithms are called strategies. A strategy is just a function. Strategy pattern allows you to swap different strategies easily.

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
