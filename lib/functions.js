const funclist = {};
funclist["linear"] = function(x) {
  return x;
};
funclist["quadratic"] = function(x) {
  return Math.pow(x, 2);
};
funclist["cubic"] = function(x) {
  return Math.pow(x, 3);
};
funclist["quartic"] = function(x) {
  return Math.pow(x, 4);
};
funclist["quintic"] = function(x) {
  return Math.pow(x, 5);
};
const sinusoidal = function(x) {
  return Math.sin(x * (Math.PI / 2));
};
funclist["sinusoidal"] = sinusoidal;
funclist["sin"] = sinusoidal;
var exponential = function(x) {
  return Math.pow(2, 10 * (x - 1));
};
funclist["exponential"] = exponential;
funclist["expo"] = exponential;
funclist["exp"] = exponential;
funclist["circular"] = function(x) {
  return 1 - Math.sqrt(1 - x*x)
};
funclist["uniqueList"] = ["linear", "quadratic", "cubic", "quartic", "quintic", "sinusoidal", "exponential", "circular"];

module.exports = exports = funclist;
