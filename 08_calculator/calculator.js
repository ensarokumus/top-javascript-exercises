const add = (a, b) => (a + b);

const subtract = (a, b) => (a - b);

const sum = (array) => array.reduce((total, current) => total + current, 0);

const multiply = (array) => array.reduce((total, current) => total * current, 1);

const power = (a, b) => Math.pow(a, b);

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    let facTotal = 1;
    for (let i = 1; i <= num; i++) {
      facTotal *= i;
    }
    return facTotal
  };
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
