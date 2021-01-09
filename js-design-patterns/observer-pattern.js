/* eslint-disable no-prototype-builtins */
"use strict";
var publisher = {
  subscribers: {
    any: [] // event type: subscribers
  },

  subscribe: function (fn, type) {
    type = type || 'any';
    if (typeof this.subscribers[type] === "undefined") {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },

  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },

  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type);
  },

  visitSubscribers: function (action, arg, type) {
    var pubtype = type || 'any',
      subscribers = this.subscribers[pubtype],
      i,
      max = subscribers.length;

    for (i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

/*
var s1 = {log: console.log},
    s2 = {err: console.error},
    s3 = {warn: console.warn};


publisher.subscribe(s1.log);
publisher.subscribe(s2.err);
publisher.subscribe(s3.warn);

publisher.publish({hello: "World"});

publisher.unsubscribe(s2.err);
publisher.publish("hello");


publisher.subscribe(s1.log, "log");
publisher.publish({obj: "log this object"}, "log");
*/

function makePublisher(o) {
  var i;
  for (i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
      o[i] = publisher[i];
    }
  }
  o.subscribers = { any: [] };
}

var paper = {
  daily: function () {
    this.publish("big news today");
  },

  monthly: function () {
    this.publish("interesting analysis", "monthly");
  }
};

makePublisher(paper);

var joe = {
  drinkCoffee: function (paper) {
    console.log('Just read ' + paper);
  },

  sundayPreNap: function (monthly) {
    console.log('About to fall asleep reading this ' + monthly);
  }
};

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.monthly();


makePublisher(joe);

joe.tweet = function (msg) {
  this.publish(msg);
};

paper.readTweets = function (tweet) {
  console.log('Call big meeting! Someone ' + tweet);
};

joe.subscribe(paper.readTweets);

joe.tweet("hated the paper today");


// Example 2
// The observer design pattern is a design pattern where you define on to many dependency relationship from one object known as the Subject to many other objects known as the Observers. These observers are ust functions which watch the subject and wait for some signal or trigger from the subject before they run. Very similar to an Event Listener. That's why the observer pattern is used when itcomes to creating event handling systems.

function Subject() {
  this.observers = []; // An Array of observer functions
}

Subject.prototype = {

  // This fn parameter is an Observer function that is saying i want to subscribe to this subject so that whenever this subject sends out some signal I want to know about it so add me to your array of observers
  subscribe: function (fn) { // fn is an Observer function
    this.observers.push(fn);
  },

  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter(fn => {
      if (fn != fnToRemove) {
        return fn;
      }
    });
  },

  // fire is the function that will notify every Observer that is currently subscribed to this Subject. We do that by looping through all of our Observer functions and call them
  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  }
}

const subject = new Subject();

function Observer1() {
  console.log('Observer 1 firing');
};

function Observer2() {
  console.log('Observer 2 firing');
}

// Adds Observer1 & Observer2 to observers array in Subject
subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.unsubscribe(Observer2);
// Calls the Observer functions in the Observers array
subject.fire();
