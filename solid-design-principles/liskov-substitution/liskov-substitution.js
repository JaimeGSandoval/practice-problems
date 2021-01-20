// This code passes the Liskov substitution principle because every sub class of swimmingBird is able to call the makeSwimmingBirdSwim function properly and every sub class of flyingBird can call the makeFlyingBirdFly function properly

class FlyingBird {
  fly() {
    console.log('I can fly');
  }
}

class SwimmingBird {
  swim() {
    console.log('I can swim');
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log('I can quack');
  }
}

class Penguin extends SwimmingBird {
}

// Every sub class of a flyingBird class must be able to use this function properly
function makeFlyingBirdFly(bird) {
  bird.fly();
}

// Every sub class of swimmingBird class must be able to use this function properly
function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
