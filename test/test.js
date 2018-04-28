const Easing = require('../');
const assert = require("assert");

const expected = [ 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 ];

assert.deepStrictEqual(Easing(11,'linear',{endToEnd:false}), expected )
assert.deepStrictEqual(Easing(11,'linear'), expected )
