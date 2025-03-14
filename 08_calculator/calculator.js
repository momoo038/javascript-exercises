const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
	
};

const multiply = function(arr) {
  return arr.reduce((sum, val) => sum * val)

};

const power = function(num1, num2) {
  return Math.pow(num1, num2);

	
};

const factorial = function(num1) {
  let result = num1;
    for (let i = 1; i < num1; i++){
      result *= i;
    }
  return result === 0 ? 1 : result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
