const fibonacci = function (num) {
  if (Number(num) <= 0) {
    return 'OOPS'
  } else {
    const fibNum = [1, 1];
    for (i = 2; i <= Number(num) - 1; i++) {
      fibNum.push(fibNum[i - 2] + fibNum[i - 1]);
    };
    return fibNum.at(Number(num) - 1);
  };
};

// function() {

// };

// Do not edit below this line
module.exports = fibonacci;
