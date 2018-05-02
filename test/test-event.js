const Easing = require("../");
const test = require("tape");

test("event", function(t) {
  t.plan(1);
  const expected = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  const x = Easing.event(11, "linear");
  const list = [];
  x.on("data", function(value) {
    list.push(value);
  });
  x.on("end", function() {
    t.deepEqual(list, expected);
  });
});
