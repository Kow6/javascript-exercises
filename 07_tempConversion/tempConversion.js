const convertToCelsius = function(degreeF) {
  let convertedC = 5/9 * (degreeF - 32)
  return Math.round(convertedC * 10) / 10
};

const convertToFahrenheit = function(degreeC) {
  let convertedF = (degreeC * 9/5) + 32
  return Math.round(convertedF * 10) / 10 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
