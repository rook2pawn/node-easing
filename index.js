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
        var time = (Math.PI*1.5) + (x * (Math.PI/2));
        return 1 + Math.sin(time);
    }
    if (type === undefined) {
        type = 'quadratic';
    }
    var step = 1/(list.length-1);
    for (var i = 1; i < list.length-1; i++) {
        list[i] = funclist[type](i*step);
    }
    list[0] = 0;
    list[list.length-1] = 1; 
    return list;
};
