| testing | coverage |
| ------- | ---------|
| [![Build Status](https://travis-ci.org/rook2pawn/node-easing.svg?branch=master)](https://travis-ci.org/rook2pawn/node-easing) | [![Coverage Status](https://coveralls.io/repos/github/rook2pawn/node-easing/badge.svg?branch=master)](https://coveralls.io/github/rook2pawn/node-easing?branch=master) |

![easing](https://github.com/rook2pawn/node-easing/raw/master/graph.png)

# easing

```js
    const Easing = require('easing')

    const x = Easing(11,'linear')
    // [ 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 ]

    const y = Easing(11,'quadratic')
    // [ 0, 0.01, 0.04, 0.09, 0.16, 0.25, 0.36, 0.49, 0.64, 0.81, 1 ]
```

## install

    npm install --save easing

## On the client

### drop it in

Simply include `browser-easing.js` and you can directly use the Easing function globally

```html
    <script src="browser-easing.js"></script>
    <script>
    var x = Easing(11,'cubic');
    console.log(x)
    </script>
```

### or with browserify

    const Easing = require('easing')

## Differences from the Original Package

This is a fork of [rook2pawn/node-easing](https://github.com/rook2pawn/node-easing) with the following changes:
- Transpile source files with Babel
- Create a library build using Webpack + babel-loader

### Motivation

As distributed, the original project's source files, including [rook2pawn/node-easing/browser-easing.js](https://github.com/rook2pawn/node-easing/blob/3a78daa45cb9f0f85f0acae1919e8a12594149f7/browser-easing.js#L16), are not valid ES5. This leads to knock-on issues, such as when bundling the library with a tool that uses [UglifyJS](https://github.com/mishoo/UglifyJS):

<details><summary>Error from UglifyJS Showing "Unexpected token operator «=»" in browser-easing.js</summary>

```
js/main-ec3d69cc.js from UglifyJs
Unexpected token operator «=», expected punc «,» [../node_modules/easing/browser-easing.js:8,0][js/main-ec3d69cc.js:28118,46]
```
</details>

Hence, this fork transpiles the source files to valid ES5:

- The **lib** folder contains individual transpiled source files
- **browser-easing.js**, a UMD module as before, is also transpiled

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

## additional interfaces

### Event interface

```js
    const Easing = require('easing')
    const x = Easing.event(11,'linear')
    x.on('data', (data) => { ... })
```

### Stream interface
```js
    const Easing = require('easing')
    const x = Easing.stream(11,'linear')
    x.pipe(process.stdout)
```

These two interfaces have their own options `duration` and `repeat` that you can also mix and match.

These two interfaces can take one or all of these options

* invert : boolean
* endToEnd : boolean
* duration : integer (milliseconds, defaults to 1000)
* repeat : boolean (default false)

## LICENSE

MIT
