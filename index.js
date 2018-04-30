const staticValues = require("./lib/static")
const Easing = staticValues;

/*
const EventEmitter = require('events');


class EaseEvent extends EventEmitter {
  write(data) {
    this.emit('data', data);
  }
}


Easing.event = function(number, type, options = {}) {
  const list = staticValues(number, type, options);
}

*/

module.exports = exports = Easing;
