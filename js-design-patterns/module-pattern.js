// Example 1
const testModules = (function () {
  let counter = 0;

  return {
    incrementCounter: function () {
      return ++counter;
    },

    resetCounter: function () {
      console.log('Counter value prior to reset: ' + counter);
      counter = 0;
    }
  };
})();

testModules.incrementCounter();
testModules.resetCounter();

// Example 2
const basketModule = (function () {

  // privates
  const basket = [];

  function doSomethingPrivate() {
    console.log('Private method');
  }

  function doSomethingElsePrivate() {
    console.log('Another private method');
  }

  // public
  return {

    // Add items obj to basket
    addItem: function (valueObj) {
      basket.push(valueObj);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    //Public alias to a private function
    accessPrivateMember: doSomethingPrivate,

    //Get total number of items in basket
    getTotal: function () {
      let itemCount = this.getItemCount(),
        total = 0;

      while (itemCount--) {
        total += basket[itemCount].price;
      }

      return total;
    }
  }
})();

// basketModule returns an object with a pubic API we can use

basketModule.addItem({
  item: 'bread',
  price: 0.5
});

basketModule.addItem({
  item: 'Iced Tea',
  price: 0.3
});

//Outputs 2
console.log(basketModule.getItemCount());

// Outputs 0.8
console.log(basketModule.getTotal());

// Output undefined because basket id a private member
console.log(basketModule.basket);
