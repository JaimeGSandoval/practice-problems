// THESE FUNCTIONS ARE EXAMPLES OF HOW YOU WOULD STRUCTURE THE FUNCTIONALITY OF CLASSES WITHOUT INHERITANCE AND USING COMPOSITION INSTEAD.

const sleeper = (state) => ({
  sleeper(length) {
    console.log(`${state.name} is sleeping`)
  }
});

const player = (state) => ({
  play() {
    console.log(`${state.name} is playing`)
  }
});

const barker = (state) => ({
  bark() {
    console.log('woof')
  }
});

const meower = (state) => ({
  meow() {
    console.log('Meow!');
  }
});


function Dog(name, breed) {
  let dog = {
    name: name,
    breed: breed
  }

  return Object.assign(dog, sleeper(dog), player(dog), barker(dog))
}


function Cat(name, breed) {
  let cat = {
    name: name,
    breed: breed
  }

  return Object.assign(cat, sleeper(cat), player(cat), meower(cat));
}

const doggy = new Dog('Leo', 'Shiba');
const kitty = new Cat('Garfield', 'Tabby');
