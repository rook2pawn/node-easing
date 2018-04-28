![easing](https://github.com/rook2pawn/node-easing/raw/master/graph.png)

# easing

Easing functions simply describe functions that are used for the purpose of easing.
Give it an array of arbitrary size and it fills those values.

```js
    const x = Easing(11,'linear');

    // [ 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 ]

```
## install

    npm install --save easing

```js
    const easing = require("easing")
```

## On the client

### drop in

Simply include `browser-easing.js` and you can directly use the Easing function globally

```html
    <script src="browser-easing.js"></script>
    <script>
    var x = Easing(11,'cubic');
    console.log(x)
    </script>
```

### with browserify

    const Easing = require('easing')


## Types of Easing

### Linear

For an array of 42 values that are linear,

    Easing(42,'linear')

### Quadratic

For an array of 100 values that are quadratic,

    Easing(100,'quadratic')


### Cubic

For an array of 42 cubic values,

    Easing(42,'cubic')

### Quartic

For an array of 1492 quartic values,

    Easing(1492,'quartic')

### Quintic

    Easing(25,'quintic')


### Sinusoidal

    Easing(333,'sinusoidal')
    Easing(333,'sin')

### Circular

    Easing(314,'circular')


### Exponential

    Easing(81,'exponential')

## options

### endToEnd

If we wanted to go from 0 to 1 back to 0 quadratically, simply call

    Easing(100,'quadratic',{endToEnd:true});

### invert

If we want to go from 1 to 0 (or 1 to 0 back to 1) instead of 0 to 1, say 'linear' style, simply call

    Easing(100,'linear',{invert:true});

You can mix and match these options.


## LICENSE

MIT
