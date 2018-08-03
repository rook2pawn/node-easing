const Easing = require("../src");
const test = require("tape");

test("uniqueList", function(t) {
  t.plan(1);
  const expected = [
    "linear",
    "quadratic",
    "cubic",
    "quartic",
    "quintic",
    "sinusoidal",
    "exponential",
    "circular",
    "sigmoid"
  ];
  t.deepEqual(Easing.uniqueList, expected);
});

test("end to end", function(t) {
  t.plan(1);
  const expected = [0, 0.04, 0.16, 0.36, 0.64, 1, 0.64, 0.36, 0.16, 0.04, 0];
  t.deepEqual(Easing(11, "quadratic", { endToEnd: true }), expected);
});

test("invert", function(t) {
  t.plan(1);
  const expected = [
    1,
    0.999,
    0.992,
    0.973,
    0.9359999999999999,
    0.875,
    0.784,
    0.657,
    0.488,
    0.271,
    0
  ];

  t.deepEqual(Easing(11, "cubic", { invert: true }), expected);
});

test("linear", function(t) {
  t.plan(2);
  const expected = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  t.deepEqual(Easing(11, "linear", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "linear"), expected);
});

test("quadratic", function(t) {
  t.plan(2);
  const expected = [0, 0.01, 0.04, 0.09, 0.16, 0.25, 0.36, 0.49, 0.64, 0.81, 1];
  t.deepEqual(Easing(11, "quadratic", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "quadratic"), expected);
});

test("cubic", function(t) {
  t.plan(2);
  const expected = [
    0,
    0.001,
    0.008,
    0.027,
    0.064,
    0.125,
    0.216,
    0.343,
    0.512,
    0.729,
    1
  ];
  t.deepEqual(Easing(11, "cubic", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "cubic"), expected);
});

test("quartic", function(t) {
  t.plan(2);
  const expected = [
    0,
    0,
    0.001,
    0.008,
    0.025,
    0.062,
    0.129,
    0.24,
    0.409,
    0.656,
    1
  ];
  t.deepEqual(Easing(11, "quartic", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "quartic"), expected);
});

test("quintic", function(t) {
  t.plan(2);
  const expected = [0, 0, 0, 0.002, 0.01, 0.031, 0.077, 0.168, 0.327, 0.59, 1];
  t.deepEqual(Easing(11, "quintic", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "quintic"), expected);
});

test("sinusoidal", function(t) {
  t.plan(4);
  const expected = [
    0,
    0.156,
    0.309,
    0.453,
    0.587,
    0.707,
    0.809,
    0.891,
    0.951,
    0.987,
    1
  ];
  t.deepEqual(Easing(11, "sinusoidal", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "sinusoidal"), expected);

  t.deepEqual(Easing(11, "sin", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "sin"), expected);
});

test("exponential", function(t) {
  t.plan(4);
  const expected = [
    0,
    0.001,
    0.003,
    0.007,
    0.015,
    0.031,
    0.062,
    0.125,
    0.25,
    0.5,
    1
  ];
  t.deepEqual(Easing(11, "exponential", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "exponential"), expected);
  t.deepEqual(Easing(11, "exp"), expected);
  t.deepEqual(Easing(11, "expo"), expected);
});

test("circular", function(t) {
  t.plan(2);
  const expected = [
    0,
    0.005,
    0.02,
    0.046,
    0.083,
    0.133,
    0.2,
    0.285,
    0.4,
    0.564,
    1
  ];
  t.deepEqual(Easing(11, "circular", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "circular"), expected);
});

test("sigmoid", function(t) {
  t.plan(2);
  const expected = [ 0, 0.524, 0.549, 0.574, 0.598, 0.622, 0.645, 0.668, 0.689, 0.71, 1 ];
  t.deepEqual(Easing(11, "sigmoid", { endToEnd: false }), expected);
  t.deepEqual(Easing(11, "sigmoid"), expected);
});
