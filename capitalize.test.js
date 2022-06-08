const capitalize = require('./capitalize');

test('Returns string capitalized.', () => {
  expect(capitalize('andres')).toBe('Andres');
});
