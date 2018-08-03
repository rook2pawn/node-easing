const staticValues = require("./static");
const funcList = require("./functions");

const Easing = staticValues;
Easing.event = require("./event");
Easing.stream = require("./stream");
Easing.uniqueList = funcList.uniqueList;

module.exports = exports = Easing;
