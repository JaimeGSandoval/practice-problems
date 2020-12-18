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


// Employee example
function Employee(firstName, lastName) {
  // Public Fields
  this.firstName = firstName;
  this.lastName = lastName;

  // Private field
  let privateFullName;

  // Private function
  let privateGetFullName = function () {
    privateFullName = firstName + " " + lastName;
    return privateFullName;
  }

  // Privileged Function
  this.privilegedGetFullName = function () {
    return privateGetFullName();
  }

  Employee.prototype.publicGetFullName = function () {
    return this.privilegedGetFullName();
  }
}

const employee = new Employee('Bruce', 'Wayne');

// console.log(employee.publicGetFullName());
// console.log(employee.privilegedGetFullName());
// console.log(employee.privateGetFullName());
// console.log(employee.privateFullName);
