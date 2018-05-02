const EventEmitter = require("events");
const staticValues = require("./static");

const eventList = function(number, type, options = {}) {
  const list = staticValues(number, type, options);

  const defaults = { duration: 1000, repeat: false };
  options = Object.assign({}, defaults, options);

  const intervalTime = ~~(options.duration / number);

  const ee = new EventEmitter();
  let index = 0;
  let id = setInterval(() => {
    ee.emit("data", list[index]);
    index++;

    if (index >= list.length) {
      if (options.repeat === false) {
        clearInterval(id);
        ee.emit("end");
      } else {
        ee.emit("repeat")
        index = 0
      }
    }
  }, intervalTime);
  ee.on("requestStop", () => {
    clearInterval(id);
    ee.emit("end")
  })
  return ee;
};

module.exports = exports = eventList;
