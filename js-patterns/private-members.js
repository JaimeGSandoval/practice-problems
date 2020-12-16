// Constructor function to keep variables private by using closure

function Gadget() {
  // Private member
  const gadgetName = 'iPad';

  // Public member
  this.getName = function () {
    return gadgetName;
  };
}

const gift = new Gadget();

// Object Literals and privacy

let myObj;
(function () {
  // Private members
  const name = 'Naruto';

  //Public part
  myObj = {
    // Privileged method
    getName: function () {
      return name;
    }
  };
}());

// Another way to implement object literal privacy. Emulates bare bones of Module Pattern

let myObj2 = (function () {
  // Private members
  const name = 'Sasuke';

  // Public Object being returned
  return {
    getName: function () {
      return name;
    }
  };
}());


// Prototypes and Privacy

function Gadget2() {
  // Private member
  const name = 'iPhone';

  // Public member
  this.getName = function () {
    return name;
  };
}

Gadget2.prototype = (function () {
  // Private member
  const browser = 'Mobile webkit';

  // Public prototype members
  return {
    getBrowser: function () {
      return browser;
    }
  }
}());

const tech = new Gadget2();
