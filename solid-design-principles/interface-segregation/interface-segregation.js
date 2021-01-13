// INTERFACE SEGREGATION PRINCIPLE

// The entire idea is to segregate your interfaces and making them smaller. Still applicable to JavaScript even though it doesn't use interfaces. The way you do it in javascript is by using classes and inheritance instead of using interfaces. You want to break apart the larger class into smaller  components that you can add to individual classes as you need.

// You want to break out your larger classes into smaller components. You can just assign the components to the different classes prototypes.

//This makes it so that each of our objects and each of our classes only ever implements the information that it can actually use. It doesn't implement anything else that it can't use. This is crucial the main point to the interface segregation principle



class Entity {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    console.log(`${this.name} moved`);
  }
}

const attacker = {
  attack(targetEntity) {
    console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }
}

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}


Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);


class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Turret.prototype, attacker);

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall)
