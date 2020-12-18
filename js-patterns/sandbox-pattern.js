// Sandbox Pattern
// Sandbox pattern provides an environment for the modules to 'play' without affecting other modules and their personal sandboxes

// In the namespace pattern you have one global object. In the Sandbox Pattern the single global object is a constructor function, which becomes the isolated sandboxed environment for your code. In this example the sandbox constructor will be named 'Sandbox'.

//Using the Sandbox would look like this
// new Sandbox(function(box) {
// code goes here
// });

// The object 'box' will be like MYAPP in the namespacing example - it'll have all the library functionality you need to make your code work.

// The Sandbox pattern can accept an additional configuration argument (or arguments) specifying names of modules required for this sandbox object instance. We want the code to be modular, so most of the functionality Sandbox() provides will be contained in modules.

// Sandbox(['ajax', event], function(box) {
// console.log(box)
//});

// This example is similar to the preceding one, but this time module names are passed as individual arguments

// Sandbox('ajax', 'dom', function(box) {
//console.log(box)
//});

// You can use "*" as a wild card argument to mean 'use all available modules'. For convenience you say when no arguments/modules are passed, the sandbox will assume '*'. So two ways to use all available modules will be:

// Sandbox('*', function(box) {
//console.log(box);
//});

// or

// Sandbox(box) {
//console.log(box;)
// }

// You can instantiate sandbox objects multiple times - and you can nest them within the other without them interfering.

// Sandbox('event', 'dom', function(box) {
// work with dom and event

// Sandbox('ajax', function(box) {
// another sandboxed 'box' object
// this 'box' is not the same as the box outside this function

// ...

// done with ajax

// });

// no trace of ajax module here

// });

// From these examples, when using the sandbox pattern, you can protect the global namespace by having your code wrapped into callback functions

// Implement Sandbox constructor. You'd want to use a different name than Sandbox, most likely the name of your app/project

function Sandbox() {
  // turning arguments into an array
  let args = Array.prototype.slice.call(arguments),
    // the last argument is the callback
    callback = args.pop(),
    // modules can be passed as an array or as individual parameters
    modules = (args[0] && typeof args[0] === 'string') ? args : args[0];

  // make sure the function is called as a constructor. This eliminates having to use the 'new' keyword when creating a new Sandbox
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  // add properties to 'this' as needed:
  this.a = 1;
  this.b = 2;

  // now add modules to the core 'this' object
  // no modules or '*' both mean use all modules
  if (!modules || modules === '*') {
    modules = [];
    for (let i in Sandbox.modules) {
      // eslint-disable-next-line no-prototype-builtins
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i)
      }
    }
  }

  // initialize the required modules
  for (let i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }

  // Call the callback
  callback(this);
}

//any prototype properties as needed
Sandbox.prototype = {
  name: 'My Application',
  version: '1.0',
  getName: function () {
    return this.name;
  }
};

// Adding modules

Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
  box.getElement = function () { };
  box.getStyle = function () { };
  box.foo = 'bar';
};

Sandbox.modules.event = function (box) {
  // access to the Sandbox prototype if needed:
  // box.constructor.prototype.m = 'mmm';
  box.attachEvent = function () { };
  box.detachEvent = function () { };
};

Sandbox.modules.ajax = function (box) {
  box.makeRequest = function () { };
  box.getResponse = function () { };
};
