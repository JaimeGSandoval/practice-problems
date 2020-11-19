/*
Create Emitter class
Create a class/function that returns an Emitter object.
This object allows us to subscribe to an event and execute a callback
whenever that event is triggered.
The emit function will trigger all functions subscribed to an event and passes
all supplied arguments.

A callback can be removed from being subscribed to an event.

functions - subscribe(eventName, cb), emit(eventName, args)
subscribe - returns 'release functionality'
*/

function Emitter() {
  // tracks our subscriptions
  // key = eventName
  // value = array of callbacks
  let eventTracker = {
    // eventNAme : [cb]
  };

  function subscribe(eventName, cb) {
    // add the cb to the eventName in the tracker.
    if (eventTracker[eventName]) {
      // handle logic when eventName already exists
      let arr = eventTracker[eventName];
      arr.push(cb);
    } else {
      // need to add eventName to eventTracker and create
      // array of callbacks
      eventTracker[eventName] = [cb];
    }

    function release() {
      // retrieve the array of cbs for this eventName
      // look for cb in the array and remove it.
      let arrayCbs = eventTracker[eventName];
      let idx = arrayCbs.indexOf(cb); // returns -1 if not found
      if (idx > -1) {
        arrayCbs.splice(idx, 1);
      }
    }

    return {
      release: release
    };
  }

  function emit(eventName, ...args) {
    // retrieve the array of cbs associated to eventName
    // call all of the cbs in the array - pass in the arguments supplied
    if (!eventTracker[eventName]) {
      return;
    }
    let arrayCbs = eventTracker[eventName];
    for (let i = 0; i < arrayCbs.length; i++) {
      let cb = arrayCbs[i];
      cb(...args);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

let myEmit = new Emitter();

function logArgs(...items) {
  console.log(items);
}
function sumAll(...nums) {
  let result = nums.reduce((acc, cur) => acc + cur, 0);
  console.log(result);
}

let sub1 = myEmit.subscribe("foo", logArgs); // should print [1,2]
let sub2 = myEmit.subscribe("foo", sumAll); // should print 3

let sub3 = myEmit.subscribe("bar", sumAll); // should print 11

myEmit.emit("foo", 1, 2); // sub1 and sub2 triggered
myEmit.emit("bar", 5, 6); // sub3 triggered
sub1.release(); // remove sub1
myEmit.emit("foo", 1, 2); // sub2 triggered

export default Emitter;
