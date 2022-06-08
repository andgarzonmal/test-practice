const { expect } = require('expect');
const len = require('./len')

test('the len of andres is equal to 6',() => {
  expect(
    len('andres')
  ).toBe(6);    
})

test('less than 1 string return error message',()=> {
  expect(()=>len('').toequal('The string needs to be at least 1 character long.'))
})