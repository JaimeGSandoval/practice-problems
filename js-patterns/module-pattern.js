// Create Module Pattern


// Set a namespace
const MYAPP3 = {};

MYAPP3.namespaceObj = function (ns_string) {
  let parts = ns_string.split('.'),
    parent = MYAPP3;

  // remove the leading "MYAPP" global from the parts array
  if (parts[0] === 'MYAPP3') {
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

// Create a namespace object for the module
MYAPP3.namespaceObj('MYAPP3.utilities.array');

// Create an IFEE for privacy if needed and returns an OBJECT, a MODULE with the actual public interface
MYAPP3.utilities.array = (function () {
  // Private properties
  let array_string = '[object Array]',
    ops = Object.prototype.toString();

  // Private methods go here

  // end of variable definitions

  // optional one time init procedures go here

  // Public API Module
  return {
    isArray: function (needle, haystack) {
      for (let i = 0, max = haystack.length; i < max; i += 1) {
        if (haystack[i] === 'needle') {
          return true;
        }
      }
    },

    inArray: function (a) {
      return ops.call(a) === array_string;
    }

    // more methods and properties
  }

}());



// Create REVEALING Module Pattern


// Set a namespace
const MYAPP4 = {};

MYAPP4.namespaceObj = function (ns_string) {
  let parts = ns_string.split('.'),
    parent = MYAPP4;

  // remove the leading "MYAPP" global from the parts array
  if (parts[0] === 'MYAPP4') {
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



// Create a namespace object for the module
MYAPP4.namespaceObj('MYAPP4.utilities.array');

// Create an IFEE for privacy if needed and returns an OBJECT, a MODULE with the actual public interface
MYAPP4.utilities.array = (function () {
  // Private properties
  let array_string = '[object Array]',
    ops = Object.prototype.toString(),

    // Private methods
    inArray = function (haystack, needle) {
      for (let i = 0, max = haystack.length; i < max; i += 1) {
        if (haystack[i] === needle) {
          return i;
        }
      }
      return -1;
    },

    isArray = function (a) {
      return ops.call(a) === array_string;
    };
  // end of variable definitions

  // REVEALING Public API
  return {
    isArray: isArray,
    indexOf: inArray
  }
}());
