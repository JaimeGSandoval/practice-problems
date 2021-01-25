// CLASSES TO DEMONSTRATE INHERITANCE

// INHERITANCE IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY ARE

// COMPOSITION IS WHERE YOU DESIGN YOUR OBJECTS AROUND WHAT THEY DO

// ***********TRY TO USE COMPOSITION OVER INHERITANCE AS MUCH AS POSSIBLE**************
// COMPOSITION IS MORE POWERFUL AND MORE FLEXIBLE

// EXAMPLE 1
class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`)
  }

  walk() {
    console.log(`${this.name} walked`)
  }
}

class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew`)
  }
}

class SwimmingMonster extends Monster {
  swim() {
    console.log(`${this.name} swam`)
  }
}

const bear = new Monster('bear');
bear.walk();

const eagle = new FlyingMonster('eagle');
eagle.fly();

const shark = new SwimmingMonster('shark');
shark.swim();
