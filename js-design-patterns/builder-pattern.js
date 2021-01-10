// Builder pattern is good to use when you need to create objects that have many inter linking parts or many optional or required fields. Useful for when you have to create objects that have many different working parts that need to all come to gether to form one single object

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

// Traditional way of creating a builder
// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name);
//   }

//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }

//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }

//   setAddress(address) {
//     this.user.address = address;
//     return this;
//   }

//   build() {
//     return this.user;
//   }
// }

// // You can chain here because each method is always returning the same object with 'return this'
// let user = new UserBuilder('Bob').setAge(20).setPhone('123-4567').setAddress('231 Main St').build();
// console.log(user);


// Example 2
class User2 {
  // The second parameter is an options object for optional parameters. This last parameter will have the keys of age, phone, and address and it may or may not have values. If no values, then they'll just be undefined by default. Here phone will have a default value of '123-4567', but a different phone number can be added if there is one
  constructor(name, { age, phone = '123-4567', address } = {}) {
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User2('Naruto', { age: 25, address: new Address('234', 'High St'), phone: '555-5555' });
console.log(user);
