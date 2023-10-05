const sumAll = function(intOne, intTwo) {
  let sum = 0;
  
  if (intOne < 0 || intTwo < 0 || (typeof intOne) !== 'number' || (typeof intTwo) !== 'number') 
    return 'ERROR';
  
  if (intOne >= intTwo) {
    for (let i = intTwo; i <= intOne; i++) {
      sum += i;    
    }
  } else {
    for (let i = intOne; i <= intTwo; i++) {
      sum += i;    
    }
  };
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
