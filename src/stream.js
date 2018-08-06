const Stream = require("stream");
const staticValues = require("./static");

const streamList = function(number, type, options = {}) {
  const list = staticValues(number, type, options);

  const defaults = { duration: 1000, repeat: false };
  options = Object.assign({}, defaults, options);

  const intervalTime = ~~(options.duration / number);

  const stream = new Stream.Readable();
  let index = 0;
  stream._read = () => {
    setTimeout(() => {
      if (index > list.length - 1) {
        return stream.push(null);
      } else {
        stream.push(list[index].toString());
        index++;
      }
    }, intervalTime);
  };
  return stream;
};

module.exports = exports = streamList;
