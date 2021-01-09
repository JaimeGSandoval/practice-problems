// The Iterator pattern provides you with a uniform way to access different collections of Objects
// If you get an array, arrayList and hashtable of Objects, you pop ou an iterator for each and treat them the same
// This provides a uniform way to cycle through different collections
// You can also write polymorphic code because you can refer to each collection of objects because they'll implement the same interface

// Iterator pattern allows you to define your own rules of how you want to iterate over some collection
// of objects

// Example 1
const items = [1, 'Bankai', false, 3.12];

function Iterator(items) {
  this.items = items;
  this.index = 0;
  // This is if you wanted to iterate backwards
  // this.index = items.length - 1;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
    // This is if you wanted to iterate backwards
    // return this.index > 0;
  },
  next: function () {
    return this.items[this.index++];
    // This is if you wanted to iterate backwards
    // return this.items[this.index--];
  }
}

const iter = new Iterator(items);


while (iter.hasNext()) {
  console.log(iter.next());
}

// Example 2

const agg = (function () {
  let index = 0,
    data = [1, 2, 3, 4, 5],
    length = data.length;

  return {
    next: function () {
      let element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index = index + 2;
      return element;
    },

    hasNext: function () {
      return index < length;
    },

    rewind: function () {
      index = 0;
    },

    current: function () {
      return data[index];
    }
  }
})();

let element;

while (element = agg.next()) {
  // do something with the next element
  console.log('element', element);
}

while (agg.hasNext()) {
  // do something with the next element
  console.log(agg.hasNext());
}
