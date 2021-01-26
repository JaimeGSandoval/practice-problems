// INTERFACE SEGREGATION PRINCIPLE

class User {
  constructor(user) {
    this.user = user;
    this.initiateUser();
    this.setUpOptions = user.options;
  }

  initiateUser() {
    this.name = this.user.name;
    this.setUpOptions();
  }
}

const user = { new User({ userProperties, options: { getMenu() }{}})}
