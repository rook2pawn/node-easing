(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Easing = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const funclist = require("./lib/functions");

const multdec = function(i, step) {
  return (~~((i * step) * 1000) / 1000)
}

const Easing = function(number, type, options) {

  if (options === undefined) {
    var options = {};
  }

  const list = new Array(number);
  const step = 1 / (list.length - 1);

  for (var i = 1; i < list.length - 1; i++) {
    let val = funclist[type](multdec(i, step));
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

module.exports = exports = Easing;

},{"./lib/functions":2}],2:[function(require,module,exports){
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
  var time = Math.PI * 1.5 + x * (Math.PI / 2);
  return 1 + Math.sin(time);
};

module.exports = exports = funclist;

},{}]},{},[1])(1)
});
