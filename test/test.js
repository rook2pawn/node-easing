var Easing = require('../');
var list = new Array(100);
/*console.log(Easing(list,'linear'));
console.log(Easing(list,'quadratic'));
console.log(Easing(list,'cubic'));
console.log(Easing(list,'sinusoidal'));
console.log(Easing(list,'exp'));
console.log(Easing(list,'circular'));
*/
console.log(Easing(list,'linear',{endToEnd:true}));
