// Single Responsibility Principle
// The idea behind the single responsibility principle is that all of you classes, modules, functions, or anything inside your code that can be put into a single part; it should only do one thing.


// EXAMPLE 1
// class below violates single responsibility principle. the logCalorieSurplus method can be on it's own.
// class CalorieTracker {
//   constructor(maxCalories) {
//     this.maxCalories = maxCalories;
//     this.currentCalories = 0;
//   }

//   trackCalories(calorieCount) {
//     this.currentCalories += calorieCount;
//     if (this.currentCalories > this.maxCalories) {
//       this.logCalorieSurplus();
//     }
//   }

//   logCalorieSurplus() {
//     console.log('Max calories exceeded');
//   }
// }

// Code below follows single responsibility principle by only keeping track of calories in the Calorie Tracker. The logMessage method becomes a module that's imported
import logMessage from './logger.js';
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage('Max calories exceeded');
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);


// EXAMPLE 2
