module.exports = exports = Easing;

function Easing(list,type) {
    var funclist = {};
    funclist['linear'] = function(x) {
        return x;
    };
    funclist['quadratic'] = function(x) {
        return Math.pow(x,2);
    };
    funclist['cubic'] = function(x) {
        return Math.pow(x,3);
    };
    funclist['quartic'] = function(x) {
        return Math.pow(x,4);
    };
    funclist['quintic'] = function(x) {
        return Math.pow(x,5);
    };
    var sinusoidal = function(x) {
        return Math.sin(x*(Math.PI/2));
    }
    funclist['sinusoidal'] = sinusoidal;
    funclist['sin'] = sinusoidal;
    var exponential = function(x) {
        return Math.pow(2, 10 * (x - 1));
    };
    funclist['exponential'] = exponential;
    funclist['expo'] = exponential;
    funclist['exp'] = exponential;
    funclist['circular'] = function(x) {
        return Math.sin((Math.PI/2)*x);
    }
    if (type === undefined) {
        type = 'quadratic';
    }
    var step = 1/(list.length-1);
    for (var i = 0; i < list.length; i++) {
        list[i] = funclist[type](i*step);
    }
    return list;
};
