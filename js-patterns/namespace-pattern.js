// // Namespace Pattern

// // Global object
const MYAPP = {};

// Constructors
MYAPP.Parent = function () {
  console.log('I\'am a parent constructor');
};
MYAPP.Child = function () {
  console.log('I\'m a child constructor');
};

// a variable
MYAPP.some_variable = 1;

// an Object Container
MYAPP.modules = {};

// Nested Objects
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = { a: 1, b: 2 };
MYAPP.modules.module2 = {};
MYAPP.modules.module2.data = { a: 3, b: 4 };


// Namespace function to check if the current name being assigned has been used yet. It's to prevent overriding vars and modules that have been defined already.

// Calling namespace as such will create this nested object hierarchy
// MYAPP.namespace('MYAPP.modules.module1'); is equivalent to
// MYAPP = {
//   modules: {
//     module1: {};
//   }
// }


const MYAPP2 = {};

MYAPP2.namespaceObj = function (ns_string) {
  let parts = ns_string.split('.'),
    parent = MYAPP2;

  // remove the leading "MYAPP" global from the parts array
  if (parts[0] === 'MYAPP2') {
    parts = parts.slice(1);
  }

  for (let i = 0; i < parts.length; i += 1) {

    // Create a property if it doesn't exist
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
}

let module2 = MYAPP2.namespaceObj('MYAPP2.modules.module2');
MYAPP2.namespaceObj('modules.module3');
MYAPP2.namespaceObj('modules.module4');
MYAPP2.modules.module4.data = { name: 'Chidori;' }
// MYAPP2.namespace('once.upon.a.time.there.was.a.long.nested.property');
