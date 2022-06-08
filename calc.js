class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static divide(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("you can't divide by zero");
      }
    }
  
    static multiply(a, b) {
      return a * b;
    }
  }
  
  module.exports = Calculator;