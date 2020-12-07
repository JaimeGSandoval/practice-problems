'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nums = [1, 2, 3];
var doubleNums = nums.map(function (e) {
  return e * 2;
});

var Person = function () {
  function Person(firstName, lastName) {
    _classCallCheck(this, Person);

    this._firstName = firstName;
    this._lastName = lastName;
  }

  _createClass(Person, [{
    key: 'getName',
    value: function getName() {
      console.log(this._firstName + ' ' + this._lastName);
    }
  }, {
    key: 'setName',
    value: function setName(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  }]);

  return Person;
}();

var seventhHokage = new Person('Uzumaki', 'Naruto');
seventhHokage.getName();
seventhHokage.setName("Hatake", "Kakashi");
seventhHokage.getName();

var NINJUTSU = function () {
  var ninjas = ['Uzumaki Naruto', 'Uchiha Sasuke', 'Haruna Sakura', 'Hatake Kakashi'];
  var sannin = ['Jiraiya', 'Orochimaru', 'Tsunade'];

  return {
    earth: function earth() {
      return console.log([sannin[0], ninjas[3]]);
    },
    lighting: function lighting() {
      return console.log([ninjas[1], ninjas[3]]);
    },
    wind: function wind() {
      return console.log([sannin[1], ninjas[0]]);
    },
    medical: function medical() {
      return console.log([sannin[2], ninjas[2]]);
    }
  };
}();