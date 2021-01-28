const { TestScheduler } = require('jest');
const reverseString = require('./reverse-string');

test('String reverses with uppercase', () => {
  expect(reverseString('Bankai')).toEqual('iaknab');
})

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

test('Should reverse the string', () => {
  expect(reverseString('Bankai')).toEqual('iaknab');
})
