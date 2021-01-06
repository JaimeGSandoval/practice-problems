// Iterator pattern allows you to define your own rules of howe want to iterate over some collection
// of objects

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
