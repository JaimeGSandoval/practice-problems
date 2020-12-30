// The sandbox pattern address the issues of the namespace pattern.
// It solves the reliance on a single global to be the app's global variable.

// We can use the sandbox pattern as follows:
// new Sandbox((box) => {
//   //.. code goes here
// });

// We pass in a function to the constructor as the basic pattern
// We can pass in an array of strings to pass in modules names
// 'foo' and 'bar' are modules names
// Sandbox(['foo', 'bar'], (box) => {
//   console.log(box);
// });

// We can initiate a sandbox multiple times. So if we want to initiate ones with different modules includes, we can write:
// Sandbox(['foo'], (box) => {
//   console.log(box);
// });

// and

// Sandbox(['foo', 'bar'], (box) => {
// console.log(box);
// });

// To implement the sandbox pattern, we can write the following to include out modules:

// class Sandbox = {
//   constructor(modules, callback) {
//     if (!(this instanceof Sandbox)) {
//       return new Sandbox(modules, callback);
//     }
//     for (const name of Object.keys(Sandbox.modules)) {
//       Sandbox.modules[name](this);
//     }
//     callback(this);
//   }
// }

// Sandbox.modules.foo = (box) => {
//   box.foo = 'bar';
// };

// Sandbox.modules.bar = (box) => {
//   box.getBar = () => {
//     console.log('bar');
//   };
// };

// const sandbox = new Sandbox(['foo', 'bar'], (box) => {
//   console.log(box);
// });

// In the code above our sandbox with the box parameter
// We did that with:

// for(const name of Object.keys(Sandbox.modules)) {
//   Sandbox.modules[name](this);
// }

// Also we called the callback parameter in the constructor with 'this' so we can also access our class instance within the callback

// We can add more checks to see if ech module and the callback are functions

// class Sandbox {
//   constructor(modules, callback) {
//     if (!(this instanceof Sandbox)) {
//       return new Sandbox(modules, callback);
//     }
//     for (const name of Object.keys(Sandbox.modules)) {
//       const fn = Sandbox.modules[name];
//       if (typeof fn === 'function') {
//         Sandbox.modules[name](this);
//       }
//       if (typeof callback === 'function') {
//         callback(this);
//       }
//     }
//   }
// }
// Sandbox.modules = {}
// Sandbox.modules.foo = (box) => {
//   box.foo = "bar";
// };
// Sandbox.modules.bar = (box) => {
//   box.getBar = () => {
//     console.log('bar');
//   };
// };
// const sandbox = new Sandbox(['foo', 'bar'], (box) => {
//   console.log(box)
// });

// We can also add extra methods to the class. We add the 'hello' method which will be a prototype of the sandbox

// class Sandbox {
//   constructor(modules, callback) {
//     if (!(this instanceof Sandbox)) {
//       return new Sandbox(modules, callback);
//     }

//     for (const name of Object.keys(Sandbox.modules)) {
//       const fn = Sandbox.modules[name];
//       if (typeof fn === 'function') {
//         Sandbox.modules[name](this);
//       }
//       if (typeof callback === 'function') {
//         callback(this);
//       }
//     }
//   }

//   hello() {
//     //...
//     console.log('hello');
//   }
// }

// Sandbox.modules = {}

// Sandbox.modules.foo = (box) => {
//   box.foo = "bar";
// };

// Sandbox.modules.bar = (box) => {
//   box.getBar = () => {
//     console.log('bar');
//   };
// };

// const sandbox = new Sandbox(['foo', 'bar'], (box) => {
//   box.hello();
// });


// Syntax below is code from above but with no notes
class Sandbox {
  constructor(modules, callback) {
    if (!(this instanceof Sandbox)) {
      return new Sandbox(modules, callback);
    }

    for (const name of Object.keys(Sandbox.modules)) {
      const fn = Sandbox.modules[name];
      if (typeof fn === 'function') {
        Sandbox.modules[name](this);
      }
      if (typeof callback === 'function') {
        callback(this);
      }
    }
  }

  hello() {
    console.log('hello');
  }
}

Sandbox.modules = {}

Sandbox.modules.foo = (box) => {
  box.foo = "bar";
};

Sandbox.modules.bar = (box) => {
  box.getBar = () => {
    console.log('bar');
  };
};

const sandbox = new Sandbox(['foo', 'bar'], (box) => {
  box.hello();
});

new Sandbox((box) => {
  // ...
});

Sandbox(['foo'], (box) => {
  console.log(box);
});

Sandbox(['foo', 'bar'], (box) => {
  console.log(box);
});
