// SINGLE RESPONSIBILITY PRINCIPLE

// BAD EXAMPLE

function Employee(name, pos, hours) {
  r = this.name = name;
  this.pos = pos;
  this.hours = hours;

  this.calculatePay = function () {
    //.....
  }

  this.reportHours() {
    //.....
  }

  this.save = function () {
    //.....
  }
}



// RIGHT WAY TO DO IT

function Employee2(name, pos, hours) {
  this.name = name;
  this.pos = pos;
  this.hours = reportHour;
}

function PayCalculator(employData) {
  this.employData = employData;

  this.calculatePay = function () {
    //...
  }
}

function HourReporter(employData) {
  this.employData = employData;

  this.reportHours = function () {
    //...
  }
}

function EmployeeServer(employData) {
  this.employData = employData;

  this.save = function () {
    //...
  }
}
