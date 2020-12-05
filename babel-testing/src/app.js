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
