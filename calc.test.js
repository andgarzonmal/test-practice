const Calculator = require('./calc')

describe('add', () => {
  test('Returns the sum', () => {
    expect(Calculator.add(5, 7)).toBe(12);
  });

  test('Is not a String', () => {
    expect(Calculator.add(5, 7)).not.toBe('12');
  });

  test('Is Defined', () => {
    expect(Calculator.add(5, 7)).toBeDefined();
  });
});

describe('subtract', () => {
  test('Returns the subtract', () => {
    expect(Calculator.subtract(7, 5)).toEqual(2);
  });

  test('Is not a String', () => {
    expect(Calculator.subtract(7, 5)).not.toBe('2');
  });

  test('Is Defined', () => {
    expect(Calculator.subtract(7, 1)).toBeDefined();
  });
});

describe('Divide', () => {
  test('Error dividing by zero', () => {
    expect(() => Calculator.divide(1000, 0)).toThrow(Error);
  });

  test('Returns the quotient', () => {
    expect(Calculator.divide(100, 50)).toBe(2);
  });

  test('Is Defined', () => {
    expect(Calculator.divide(100, 50)).toBeDefined();
  });
});

describe('Multiply', () => {
  test('Returns the product', () => {
    expect(Calculator.multiply(7, 5)).toEqual(35);
  });

  test('Is not a String', () => {
    expect(Calculator.multiply(7, 5)).not.toBe('35');
  });
});