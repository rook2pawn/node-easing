const funclist = require("./functions");

const round = function(val) {
  return ~~(val * 1000) / 1000;
};

const staticValues = function(number, type, options = {}) {
  const list = new Array(number);
  options.start = (options.start !== undefined) ? options.start : 0
  options.end = (options.end !== undefined) ? options.end : 1
  const width = Math.abs(options.end - options.start)
  const step = width / (list.length - 1);
  for (var i = 1; i < list.length - 1; i++) {
    let x = (i * step) + options.start
    let val = round(funclist[type](x));
    list[i] = val;
  }

  list[0] = round(funclist[type](options.start));
  list[list.length - 1] = round(funclist[type](options.end));

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
