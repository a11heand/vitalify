/* 
   Filename: ComplexCalculator.js 
   Content: JS code for a complex calculator with advanced mathematical functions
*/

// Importing Math library
const Math = require('mathjs');

// Constants
const PI = Math.PI;
const E = Math.E;

// Custom functions
function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   } else {
      return n * factorial(n - 1);
   }
}

function logarithm(base, number) {
   if (base === undefined || number === undefined) {
      throw new Error("Both base and number parameters are required.");
   } else {
      return Math.log(number) / Math.log(base);
   }
}

// Class definition
class ComplexCalculator {
   constructor() {
      this.result = 0;
   }

   // Basic arithmetic operations
   add(a, b) {
      this.result = Math.add(a, b);
      return this.result;
   }

   subtract(a, b) {
      this.result = Math.subtract(a, b);
      return this.result;
   }

   multiply(a, b) {
      this.result = Math.multiply(a, b);
      return this.result;
   }

   divide(a, b) {
      if (b === 0) {
         throw new Error("Cannot divide by zero.");
      } else {
         this.result = Math.divide(a, b);
         return this.result;
      }
   }

   // Advanced mathematical functions
   squareRoot(a) {
      this.result = Math.sqrt(a);
      return this.result;
   }

   power(base, exponent) {
      this.result = Math.pow(base, exponent);
      return this.result;
   }

   sine(a) {
      this.result = Math.sin(a);
      return this.result;
   }

   cosine(a) {
      this.result = Math.cos(a);
      return this.result;
   }

   tangent(a) {
      this.result = Math.tan(a);
      return this.result;
   }

   logarithm(base, number) {
      this.result = logarithm(base, number);
      return this.result;
   }

   factorial(n) {
      this.result = factorial(n);
      return this.result;
   }

   // Getters and setters
   getResult() {
      return this.result;
   }

   setResult(value) {
      this.result = value;
   }
}

// Usage example
const calculator = new ComplexCalculator();
calculator.add(5, 3); // Returns: 8
calculator.squareRoot(64); // Returns: 8
console.log(calculator.getResult()); // Prints: 8

// ... More complex calculations and use cases ...

// Exporting the ComplexCalculator class
module.exports = ComplexCalculator;