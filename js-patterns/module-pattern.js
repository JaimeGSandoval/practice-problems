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
