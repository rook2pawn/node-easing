![easing](https://github.com/rook2pawn/node-easing/raw/master/graph.png)

easing
======

Easing functions simply describe functions that are used for the purpose of easing.
Give it an array of arbitrary size and it fills those values. 

Load it up
==========
    
    Simply include browser-easing.js and you can require('easing') directly in your client side code.


Simple
======

    var x = Easing(11,'cubic');


    And there you have it, an array of eleven elements whose value starts at 0 and ends at 1 which are populated with
    cubic easing values.

    [ 0,
        0.0010000000000000002,
        0.008000000000000002,
        0.02700000000000001,
        0.06400000000000002,
        0.125,
        0.21600000000000008,
        0.3430000000000001,
        0.5120000000000001,
        0.7290000000000001,
    1 ]


Types of Easing
===============

Linear
------

For an array of 42 values that are linear, 

    Easing(42,'linear')

 
Quadratic
---------

For an array of 100 values that are quadratic,

    Easing(100,'quadratic')

 
Cubic
-----

For an array of 42 cubic values,
    
    Easing(42,'cubic')

Quartic
-------

For an array of 1492 quartic values,

    Easing(1492,'quartic')

Quintic
-------

    Easing(25,'quintic')


Sinusoidal
----------
    
    Easing(333,'sinusoidal')
    Easing(333,'sin')

Circular
--------
    
    Easing(314,'circular')


Exponential
-----------
    
    Easing(81,'exponential')



Optional options
================

End To End
----------

If we wanted to go from 0 to 1 back to 0 quadratically, simply call 

    Easing(100,'quadratic',{endToEnd:true});

Invert
------

If we want to go from 1 to 0 (or 1 to 0 back to 1) instead of 0 to 1, say 'linear' style, simply call 

    Easing(100,'linear',{invert:true});

You can mix and match these options.
