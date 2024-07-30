const convertToCelsius = function(fahrenheit) {
  //F to C: (F - 32)*(5/9)
  return ((fahrenheit-32) * (5/9)).toFixed(1) * 1;
};

const convertToFahrenheit = function(celsius) {
  //C to F: (C * (9/5)) + 32
  return ((celsius * (9/5)) + 32).toFixed(1) * 1;
};

//NOTE: toFixed returns string representation of number
//Multiplying by 1 to convert back into number

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
