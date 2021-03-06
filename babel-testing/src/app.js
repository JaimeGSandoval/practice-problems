
const nums = [1, 2, 3];
let doubleNums = nums.map((e) => e * 2);

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getName() {
    console.log(`${this._firstName} ${this._lastName}`);
  }

  setName(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
}

const seventhHokage = new Person('Uzumaki', 'Naruto');
seventhHokage.getName();
seventhHokage.setName("Hatake", "Kakashi");
seventhHokage.getName();

// Example of how to add a variable to a class in ES6
class MyClass {

  // To be able to retrieve the variable from the class you need to create a getter, like below with
  // this.constructor.bankai
  get bankai() {
    return this.constructor.bankai;
  }
}
MyClass.bankai = 'test bankai';



const NINJUTSU = function () {
  const ninjas = ['Uzumaki Naruto', 'Uchiha Sasuke', 'Haruna Sakura', 'Hatake Kakashi'];
  const sannin = ['Jiraiya', 'Orochimaru', 'Tsunade'];

  return {
    earth: () => console.log([sannin[0], ninjas[3]]),
    lighting: () => console.log([ninjas[1], ninjas[3]]),
    wind: () => console.log([sannin[1], ninjas[0]]),
    medical: () => console.log([sannin[2], ninjas[2]])
  }
}();
