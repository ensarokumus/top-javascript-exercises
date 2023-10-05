const repeatString = function(string, num) {
  if (num < 0) {
    return 'ERROR'
  } else if (num === 0) {
    return ''
  } else {
    let output = '';
    for (let i = 1; i <= num; i++) {
      output += string;
      console.log(output);
    }; 
    return output;
  };
};

// Do not edit below this line
module.exports = repeatString;
