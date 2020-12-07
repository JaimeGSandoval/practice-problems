'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 1.How to hide all elements specified ?

var hide = function hide() {
  for (var _len = arguments.length, el = Array(_len), _key = 0; _key < _len; _key++) {
    el[_key] = arguments[_key];
  }

  return [].concat(el).forEach(function (e) {
    return e.style.display = 'none';
  });
};

// Example
// hide(document.querySelectorAll('img')); // Hides all <img> elements on the page

// 2.How to check if the element has the specified class?

var hasClass = function hasClass(el, className) {
  return el.classList.contains(className);
};

// Example
hasClass(document.querySelector('p.special'), 'special'); // true

// 3.How to toggle a class for an element ?

var toggleClass = function toggleClass(el, className) {
  return el.classList.toggle(className);
};

// Example
toggleClass(document.querySelector('p.special'), 'special');
// The paragraph will not have the 'special' class anymore

// 4.How to get the scroll position of the current page ?

var getScrollPosition = function getScrollPosition() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
};

// Example
getScrollPosition(); // {x: 0, y: 200}

// 5.How to smooth - scroll to the top of the page ?

var scrollToTop = function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// Example
scrollToTop();

// 6.How to check if the parent element contains the child element ?

var elementContains = function elementContains(parent, child) {
  return parent !== child && parent.contains(child);
};

// Examples
elementContains(document.querySelector('head'), document.querySelector('title'));
// true
elementContains(document.querySelector('body'), document.querySelector('body')); // false

// 7.How to check if the element specified is visible in the viewport ?

var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
  var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left,
      bottom = _el$getBoundingClient.bottom,
      right = _el$getBoundingClient.right;

  var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth;

  return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// Examples
elementIsVisibleInViewport(el); // (not fully visible)
elementIsVisibleInViewport(el, true); // (partially visible)

// 8.How to fetch all images within an element ?

var getImages = function getImages(el) {
  var includeDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var images = [].concat(_toConsumableArray(el.getElementsByTagName('img'))).map(function (img) {
    return img.getAttribute('src');
  });
  return includeDuplicates ? images : [].concat(_toConsumableArray(new Set(images)));
};

// Examples
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']

// 9.How to figure out if the device is a mobile device or a desktop / laptop ?

var detectDeviceType = function detectDeviceType() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
  );
};

// Example
detectDeviceType(); // "Mobile" or "Desktop"

// 10.How to get the current URL ?

var currentURL = function currentURL() {
  return window.location.href;
};

// Example
currentURL(); // 'https://google.com'

// 11.How to create an object containing the parameters of the current URL ?

var getURLParameters = function getURLParameters(url) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
    return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
  }, {});
};

// Examples
getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
getURLParameters('google.com'); // {}

// 12.How to encode a set of form elements as an object ?

// const formToObject = form =>
//   Array.from(new FormData(form)).reduce(
//     (acc, [key, value]) => ({
//       ...acc,
//       [key]: value
//     }),
//     {}
//   );

// Example
formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }

// 13.How to retrieve a set of properties indicated by the given selectors from an object ?

var get = function get(from) {
  for (var _len2 = arguments.length, selectors = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    selectors[_key2 - 1] = arguments[_key2];
  }

  return [].concat(selectors).map(function (s) {
    return s.replace(/\[([^\[\]]*)\]/g, '.$1.').split('.').filter(function (t) {
      return t !== '';
    }).reduce(function (prev, cur) {
      return prev && prev[cur];
    }, from);
  });
};
var obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

// Example
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']

// 14.How to invoke the provided function after wait(in milliseconds) ?

var delay = function delay(fn, wait) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return setTimeout.apply(undefined, [fn, wait].concat(args));
};
delay(function (text) {
  console.log(text);
}, 1000, 'later');

// Logs 'later' after one second.

// 15.How to trigger a specific event on a given element, optionally passing custom data ?

var triggerEvent = function triggerEvent(el, eventType, detail) {
  return el.dispatchEvent(new CustomEvent(eventType, { detail: detail }));
};

// Examples
triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });

// 16.How to remove an event listener from an element ?

var off = function off(el, evt, fn) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return el.removeEventListener(evt, fn, opts);
};

var fn = function fn() {
  return console.log('!');
};
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page

// 17.How to get readable format of the given number of milliseconds ?

var formatDuration = function formatDuration(ms) {
  if (ms < 0) ms = -ms;
  var time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time).filter(function (val) {
    return val[1] !== 0;
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return val + ' ' + key + (val !== 1 ? 's' : '');
  }).join(', ');
};

// Examples
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'

// 18.How to get the difference(in days) between two dates ?

var getDaysDiffBetweenDates = function getDaysDiffBetweenDates(dateInitial, dateFinal) {
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
};

// Example
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9

// 19.How to make a GET request to the passed URL ?

var httpGet = function httpGet(url, callback) {
  var err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.error;

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function () {
    return callback(request.responseText);
  };
  request.onerror = function () {
    return err(request);
  };
  request.send();
};

httpGet('https://jsonplaceholder.typicode.com/posts/1', console.log);

// Logs: {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}

// 20.How to make a POST request to the passed URL ?

var httpPost = function httpPost(url, data, callback) {
  var err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : console.error;

  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = function () {
    return callback(request.responseText);
  };
  request.onerror = function () {
    return err(request);
  };
  request.send(data);
};

var newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
var data = JSON.stringify(newPost);
httpPost('https://jsonplaceholder.typicode.com/posts', data, console.log);

// Logs: {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}

// 21.How to create a counter with the specified range, step and duration for the specified selector ?

var counter = function counter(selector, start, end) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2000;

  var current = start,
      _step = (end - start) * step < 0 ? -step : step,
      timer = setInterval(function () {
    current += _step;
    document.querySelector(selector).innerHTML = current;
    if (current >= end) document.querySelector(selector).innerHTML = end;
    if (current >= end) clearInterval(timer);
  }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};

// Example
counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"

// 22.How to copy a string to the clipboard ?

var copyToClipboard = function copyToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

// Example
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.

// 23.How to find out if the browser tab of the page is focused ?

var isBrowserTabFocused = function isBrowserTabFocused() {
  return !document.hidden;
};

// Example
isBrowserTabFocused(); // true

// 24.How to create a directory, if it does not exist ?

var fs = require('fs');
var createDirIfNotExists = function createDirIfNotExists(dir) {
  return !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;
};

// Example
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist


var powerRanger = function powerRanger() {
  return console.log('Green Ranger');
};
powerRanger();

exports.default = powerRanger;