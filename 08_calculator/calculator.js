const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(nums) {
	return nums.reduce((total, num) => total += num, 0);
};

const multiply = function(...nums) {
  return nums.reduce((total, num) => total *= num, 1);
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(num) {
  fat = 1;
  for (let i = num; i > 0; i--) {
    fat *= i;
  }
  return fat;
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
