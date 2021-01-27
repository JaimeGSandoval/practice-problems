// // If you know that your application is going to keep things simple, inheritance is just fine. Go ahead and use it.
// // But if your building an architecture that's likely to change, be aware that you might run into situations which could require you to do a big refactoring (maybe you come up with different classes, or whatever)

// INHERITANCE IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY ARE

// COMPOSITION IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY DO

// ***********TRY TO USE COMPOSITION OVER INHERITANCE AS MUCH AS POSSIBLE**************
// COMPOSITION IS MORE POWERFUL AND MORE FLEXIBLE

//COMPOSITION
const talker = (state) => ({
  talk: (...msg) => console.log(msg.join(' '))
});

const walker = (state) => ({
  walk: () => {
    let nm = state.name || state.id;
    console.log(nm, 'walking');
  }
});

const eater = (state) => ({
  eat: () => {
    let nm = state.name || state.id;
    console.log(nm, 'eating');
  }
});

const driver = (state) => ({
  drive: () => {
    let nm = state.name || state.id;
    console.log(nm, '\u26A1', 'driving');
  }
});

const wifier = (state) => ({
  wifi: () => {
    let nm = state.name || state.id;
    console.log(nm, '\u26A1', 'connecting');
  }
});

const Person = (name, speed = 3) => {
  let state = {
    name,
    speed
  }

  return Object.assign({},
    talker(state),
    walker(state),
    eater(state));
};

let Bob = Person('Bob');
Bob.talk('Hello from Bob.');
Bob.eat();
Bob.walk();

const Android = (id, speed = 6) => {
  let state = {
    id,
    speed
  }

  return Object.assign({},
    talker(state),
    driver(state),
    wifier(state));
};

let k45 = Android('k45');
k45.drive();
k45.wifi();

const Cyborg = (name, speed) => {
  let state = {
    name,
    speed
  };

  return Object.assign({},
    talker(state),
    walker(state),
    wifier(state));
};

let Dolph = Cyborg('Dolph', 9);
Dolph.walk();
Dolph.wifi();
