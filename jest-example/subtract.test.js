const { test, expect } = require('@jest/globals');
const subtract = require('./subtract');

test('Properly subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
})
