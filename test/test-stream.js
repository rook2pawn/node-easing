const Easing = require("../src");
const test = require("tape");
const through2 = require("through2");

test("stream", function(t) {
  t.plan(1);
  const expected = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  const x = Easing.stream(11, "linear");
  const list = [];
  x
    .pipe(
      through2(function(chunk, enc, cb) {
        list.push(parseFloat(chunk));
        cb();
      })
    )
    .on("finish", function() {
      t.deepEqual(list, expected);
    });
});
