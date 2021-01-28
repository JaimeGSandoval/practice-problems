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
  //key = event name
  //val = array of subscribers to that event
  const eventTracker = {};

  const subscribe = (name, cb) => {
    if (eventTracker[name]) {
      eventTracker[name].push(cb);
    } else {
      eventTracker[name] = [cb];
    }
    return {
      release: () => {
        let theCbs = eventTracker[name];
        let idx = theCbs.indexOf(cb);
        if (idx > -1) {
          theCbs.splice(idx, 1);
        }
      }
    };
  };

  const emit = (name, ...theArgs) => {
    let cbs = eventTracker[name];
    for (let i = 0; i < cbs.length; i++) {
      var cb = cbs[i];
      cb.apply(null, theArgs);
    }
  };

  return {
    subscribe,
    emit
  };
}
