// Self Defining Function
let scareMe = function () {
  console.log('Boo');
  scareMe = function () {
    console.log('Double Boo');
  };
};

scareMe(); // Boo
scareMe() // Double Boo
