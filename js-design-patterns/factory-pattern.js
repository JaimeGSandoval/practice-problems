"use strict";

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


// Example 2

function Developer(name) {
  this.name = name;
  this.type = 'Developer';
}

function Tester(name) {
  this.name = name;
  this.type = 'Tester';
}


function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  }
}


function say() {
  console.log('Hi, I am ' + this.name + ' and I am a ' + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create('Darth Vader', 1));
employees.push(employeeFactory.create('Luke Skywalker', 2));

employees.forEach(employee => {
  say.call(employee);
})
