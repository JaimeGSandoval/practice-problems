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
