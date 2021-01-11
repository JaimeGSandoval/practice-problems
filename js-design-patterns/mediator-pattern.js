// the Mediator pattern allows you to define an object known as the mediator that encapsulates and controls how some set of objects interact with each other. Instead of having multiple objects interacting and send messages to each other, the mediator object takes those messages and handles any complex logic and routing to decide where these messages need to go. Good example of using a mediator pattern is a chat room.

// Example 1

// player constructor
function Player(name) {
  this.points = 0;
  this.name = name;
}
// play method
Player.prototype.play = function () {
  this.points += 1;
  mediator.played();
};

// the scoreboard object
var scoreboard = {

  // HTML element to be updated
  element: document.getElementById('results'),

  // update the score display
  update: function (score) {

    var i, msg = '';
    for (i in score) {
      if (score.hasOwnProperty(i)) {
        msg += '<p><strong>' + i + '<\/strong>: ';
        msg += score[i];
        msg += '<\/p>';
      }
    }
    this.element.innerHTML = msg;
  }
};


var mediator = {

  // all the players
  players: {},

  //
  setup: function () {
    var players = this.players;
    players.home = new Player('Home');
    players.guest = new Player('Guest');

  },

  // someone plays, update the score
  played: function () {
    var players = this.players,
      score = {
        Home: players.home.points,
        Guest: players.guest.points
      };

    scoreboard.update(score);
  },

  // handle user interactions
  keypress: function (e) {
    e = e || window.event; // IE
    if (e.which === 49) { // key "1"
      mediator.players.home.play();
      return;
    }
    if (e.which === 48) { // key "0"
      mediator.players.guest.play();
      return;
    }
  }
};


// go!
mediator.setup();
window.onkeypress = mediator.keypress;

// game over in 30 seconds
setTimeout(function () {
  window.onkeypress = null;
  console.log('Game over!');
}, 30000);


// ////////// Example 2

function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (message, toMember) {
    // here 'this' represents the current member sending the message
    this.chatroom.send(message, this, toMember);
  },
  receive: function (message, fromMember) {
    // 'this.name' is the current member
    console.log(`${fromMember.name} to ${this.name}: ${message}`)
  }
}

// Mediator object
function ChatroomMediatorObj() {
  this.members = {};
}

ChatroomMediatorObj.prototype = {
  addMember: function (member) {
    // creating a new property in the members object. It uses the name of the member we want to add as a key
    this.members[member.name] = member;
    // Need to set this member's chatroom to equal this chatroom. Previously it was null
    member.chatroom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  }
}

const chat = new ChatroomMediatorObj();

const bob = new Member('Bob');
const john = new Member('John');
const tim = new Member('Tim');

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send('Hey, John', john);
john.send('What\'s up, Bob', bob);
tim.send('Whaat up, john', john);
