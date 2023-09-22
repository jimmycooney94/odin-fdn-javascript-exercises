function round1dp (val) {
  return Math.round(10*val)/10;
}

const convertToCelsius = function(fahrenheit) {
  return round1dp((fahrenheit - 32) * 5/9);
};

const convertToFahrenheit = function(celsius) {
  return round1dp((celsius * 1.8) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
