const revealingModulePattern = (function () {

  // Private
  let privateCounter = 0;

  function privateFunction() {
    privateCounter++;
  }

  function publicFunction() {
    publicIncrement();
  }

  function publicIncrement() {
    privateFunction()
  }

  function publicGetCount() {
    return privateCounter;
  }

  // Revel public pointers to private functions and properties

  return {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
  }
})();

revealingModulePattern.start();
revealingModulePattern.increment();
revealingModulePattern.increment();
revealingModulePattern.increment();
console.log('test', revealingModulePattern.count());
