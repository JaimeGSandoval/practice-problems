// // COMPOSITION EXAMPLES
// // COMPOSITION USES FUNCTIONS INSTEAD OF CLASSES AND INHERITANCE
// // NO CLASSES. ONLY FUNCTIONS THAT GIVE FUNCTIONALITY AND FUNCTIONS THAT CREATE MONSTERS
// // COMPOSITION IS VERY STRAIGHT FORWARD, TO THE POINT AND VERY FLEXIBLE. NO INHERITANCE AND NO OOP
// // THE MAIN GOOD THING ABOUT COMPOSITION IS THAT IT GIVES YOUR CODE A GREAT AMOUNT OF FLEXIBILITY AND YOU CAN DODGE THE STRICT INHERITANCE TREE

// INHERITANCE IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY ARE

// COMPOSITION IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY DO

// ***********TRY TO USE COMPOSITION OVER INHERITANCE AS MUCH AS POSSIBLE**************
// COMPOSITION IS MORE POWERFUL AND MORE FLEXIBLE

// // EXAMPLE 1

// // THESE FUNCTIONS DESCRIBE EVERYTHING THE MONSTERS CAN DO

// // Destructuring the name out of the object for the parameter
function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`)
  }
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`)
  }
}

function attacker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`)
  }
}

function walking({ name }) {
  return {
    walk: () => console.log(`${name} walked`)
  }
}


// FUNCTIONS THAT CREATE DIFFERENT MONSTERS
function swimmingMonsterCreator(name) {
  // Placing name as a property in a object so it can be deconstructed when passed as an argument to action functions
  const monster = { name: name }

  return {
    ...monster,
    ...swimmer(monster)
  }
}


function flyingSwimmingMonsterCreator(name) {
  const monster = { name: name }

  return {
    ...monster,
    ...swimmer(monster),
    ...flyer(monster)
  }
}

function megaMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...walking(monster),
    ...attacker(monster),
    ...swimmer(monster),
    ...flyer(monster)
  }
}

const obj = swimmingMonsterCreator('Monster');
obj.swim();

const obj2 = flyingSwimmingMonsterCreator('Monster');
obj2.fly();

const megaMonster = megaMonsterCreator('Godzilla');
megaMonster.fly();
megaMonster.swim();
megaMonster.attack();
megaMonster.walk();
