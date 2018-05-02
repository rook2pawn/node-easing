const funclist = require("./functions");

const round = function(val) {
  return ~~(val * 1000) / 1000;
};

const staticValues = function(number, type, options = {}) {
  const list = new Array(number);
  const step = 1 / (list.length - 1);

  for (var i = 1; i < list.length - 1; i++) {
    let val = round(funclist[type](i * step));
    list[i] = val;
  }

  list[0] = 0;
  list[list.length - 1] = 1;

  if (options.endToEnd) {
    var mid = Math.floor(list.length / 2);
    for (var i = 1; i < mid; i++) {
      list[i] = list[i * 2];
    }
    list[mid] = 1;
    for (var i = mid + 1; i < list.length - 1; i++) {
      list[i] = list[mid - (i - mid)];
    }
    list[list.length - 1] = 0;
  }
  if (options.invert) {
    for (var i = 0; i < list.length; i++) {
      list[i] = 1 - list[i];
    }
  }
  return list;
};

module.exports = exports = staticValues;
