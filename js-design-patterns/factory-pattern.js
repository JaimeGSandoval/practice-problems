"use strict";

// Factory Pattern allows you to create all your objects in a centralized location so you can minimize the amount of 'new' keyword usage. Keeps code
// clean and concise

const factoryFunc = function (newNum) {
  let num = 100;
  return {
    sum() {
      return num * newNum;
    }
  }
};

const test = factoryFunc(5);
test.sum() // 500


class Greeting1 {
  constructor(greet) {
    this.greeting = greet;
  }

  greet() {
    console.log(this.greeting);
  }
};

const Greeting2 = function (greet) {
  this.greeting = greet;
  this.greet = () => console.log(this.greeting);
};

const greeting3 = function (greeting) {
  return {
    greet() {
      console.log(greeting);
    }
  }
};

const greet1 = new Greeting1('Hi');
const greet2 = new Greeting2('Yo');
const greet3 = greeting3('What up');

document.querySelector('button').addEventListener('click', greet3.greet);


// Example for keeping track of employees

function DeveloperEmployee(name) {
  this.name = name;
  this.type = 'Developer';
}

function TesterEmployee(name) {
  this.name = name;
  this.type = 'Tester';
}

// Type 1 employee will be Developer.
// Type 2 employee will be Tester
function EmployeeFactory() {
  this.createEmployee = (name, type) => {
    switch (type) {
      case 1:
        return new DeveloperEmployee(name);
        break;
      case 2:
        return new TesterEmployee(name);
        break;
    }
  }
}

function say() {
  console.log(`Hi, my name is ${this.name} and I'm a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.createEmployee('Jaime', 1));
employees.push(employeeFactory.createEmployee('Naruto', 2));

employees.forEach(emp => {
  say.call(emp);
});
