const staticValues = require("./lib/static");
const funcList = require("./lib/functions");

const Easing = staticValues;
Easing.event = require("./lib/event");
Easing.stream = require("./lib/stream");
Easing.uniqueList = funcList.uniqueList;

module.exports = exports = Easing;
