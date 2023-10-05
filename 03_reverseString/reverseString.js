const reverseString = function(string) {
  stringArray = Array.from(string);
  revStringArray = [];
  for (let i = stringArray.length - 1; 0 <= i; i--) {
    revStringArray.push(stringArray[i]);
  }
  return revStringArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
