"use strict";

// Singleton pattern is user when you only want a single instance of a class
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

const userProcess = Singleton.getProcessManager();
const userProcess2 = Singleton.getProcessManager();
