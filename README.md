easing
======

Easing functions simply describe functions that are used for the purpose of easing.
You can find many libraries that give you easing functionality, but you're usually tied to a library and
a large intrusion of unwanted code, similar to installing an application and it asking if you'd like the Bing Bar, Yahoo Search, 
and free Email Weather Reports with a promise to never sell your information unless the price is right.

This library just gives you the MATH.

Simple
======

    var x = Easing(new Array(11),'cubic');


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

Options
=======

Linear
------

    simply call Easing(list,'linear')

 
Quadratic
---------

    simply call Easing(list,'quadratic')

 
Cubic
-----

    simply call Easing(list,'cubic')

Quartic
-------

    simply call Easing(list,'quartic')

Quintic
-------

    simply call Easing(list,'quintic')


Sinusoidal
----------

    simply call Easing(list,'sinusoidal')
    or Easing(list,'sin')

Circular
--------
    
    simply call Easing(list,'circular')


Exponential
-----------
    
    simply call Easing(list,'exponential')
