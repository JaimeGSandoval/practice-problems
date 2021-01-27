// INHERITANCE
// CHARACTER > HUMAN > SAM
// CHARACTER > ROBOT > x73

// INHERITANCE IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY ARE

// COMPOSITION IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY DO

// ***********TRY TO USE COMPOSITION OVER INHERITANCE AS MUCH AS POSSIBLE**************
// COMPOSITION IS MORE POWERFUL AND MORE FLEXIBLE


const Character = {
  talk: function (...msg) {
    console.log(msg.join(' '))
  }
}

const Human = Object.create(Character, {
  speed: { value: 3 },
  name: { value: 'Hector' }
});

Human.walk = function () {
  this.talk(this.name, 'walking')
};

Human.eat = function () {
  this.talk(this.name, 'eating')
};

const Robot = Object.create(Character, {
  speed: { value: 8 },
  id: { value: 'THX1138' }
});

Robot.drive = function () {
  this.talk(this.id, '\u26A1', 'driving')
};

Robot.wifi = function () {
  this.talk(this.id, '\u26A1', 'connecting')
};

const sam = Object.create(Human, {
  name: {
    value: 'Samual'
  }
});

sam.walk();
sam.talk('bankai');

const x73 = Object.create(Robot, {
  id: {
    value: 'x73'
  }
});

x73.drive();
x73.wifi();
