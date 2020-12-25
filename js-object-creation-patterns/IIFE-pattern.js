// IIFE Pattern
(function () {
  console.log('IFEE jutsu 1');
}());


(function () {
  let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    today = new Date(),
    msg = 'Today is ' + days[today.getDay()] + ' the ' + today.getDate();

  console.log(msg);
}());


// Immediate Object Initialization
({
  // here you can define setting values
  max_width: 600,
  max_height: 400,

  // you can also define utility methods
  gimmeMax: function () {
    return this.max_width + ' x ' + this.max_height;
  },

  // initialize
  init: function () {
    console.log(this.gimmeMax());
    // more init tasks...
  }
}).init();
