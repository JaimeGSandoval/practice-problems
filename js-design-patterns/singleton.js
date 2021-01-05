"use strict";

// Singleton pattern is user when you only want a single instance of a class
// Used when you want to limit the number of instances of an object to at most 1. 
// There are many ways to do it

function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = createProcessManager();
        return pManager;
      }
      return pManager;
    }
  }
}());

// First call of process manager goes into Singleton, calls getProcessManager() and checks to see if the pManager is null. If it's null, then we create one with 
// createProcessManager() and set it to pManager. Now our only instance of Process Manager being stored in pManager.
const userProcess = Singleton.getProcessManager();

// Now when we call getProcessManager() again it checks to see if pManager is null. It isn't null, it's been set, so we just return pManager and stick with a single object
const userProcess2 = Singleton.getProcessManager();


// Example 2
class Settings {
  constructor() {

    // This checks to see if all of the code below has run, making the instance the one and only one of it. If it is, just return it.
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }

    this.settingsObject = {
      'background': '#ff0000',
      'version': Math.floor(Math.random() * 4000)
    };

    // Freeze the settings object to stop people from modifying it after it's created
    Object.freeze(this.settingsObject);

    // Below is how to create a singleton.
    // Whe you keep calling 'new Settings', each time one going to get the exact same Settings instance

    // Object.freeze means that people can't modify the instance which we create, such as adding, deleting, or changing properties or methods.
    Object.freeze(this);

    // This applies to he Settings class, not the instance that was just created. This is key to getting the singleton to work. This is a semi global property on the Settings class.
    Settings.instance = this;
  }

  getInstance(key) {
    return this.settingsObject[key];
  }
}

  Settings.prototype.test = () => {
  console.log('bankai!!');
}

const setting1 = new Settings();
const setting2 = new Settings();

// This is true. Both point to the ONE and ONLY instance.
setting1 === setting2;
