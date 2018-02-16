'use strict'

// Identity function
function identity(x) {
    return x;
}
//console.log(identity(3));



// Basic math opreations
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
} 



// Function that takes an argument and returns a function that returns that argument 
function identityf(x) {
    return function () {
        return x;
    };
}
var three = identityf(3); 
//console.log(three());




// Function addf that adds from two invocations
// addf(3)(4); // 7
function addf(x) {
    return function addf_bis(y) {
        return x + y;
    };
}
var sum = addf(-8)(-10);
// console.log(sum);



// Function liftf that takes a binary function and makes it callable with two invocations
// var addf = liftf(add);
// addf(3)(4)       // 7
// lift(mul)(5)(6)  // 30
function liftf(f) {
    return function first_call(x) {
        return function second_call(y) {
            return f(x,y);
        };
    };
}
/* console.log(
    liftf(add)(3)(4), 
    liftf(sub)(10)(9),
    liftf(mul)(6)(5)
) */



// Function curry that takes a binary function and an argument and returns a function that ca take the second argument of the binary function
/* 
function curry(f, x) {
    return function curried(y) {
        return f(x, y);
    };
} 
*/
// Better alternative using lift
function curry(f, x) {
    return liftf(f)(x);
}
/* var add3 = curry(add, 3);
var sumTo3 = add3(4); //7
console.log(sumTo3);
console.log( curry(mul,5)(6) ); */

// curryg generalized to any number ofarguments
function curryg(f) {
    var args = [].slice.call(arguments, 1);
    return function() {
        return f.apply( 
            null, 
            args.concat([].slice.call(arguments,0))
        );
    };
}
// ES6 version
function curryES6(func, ...first) {
    return function(...second) {
        return func(...first, ...second);
    };
}
/* function add4(a, b, c, d) {
    return a + b +c + d;
}
console.log(curryg(add4, 1, 2)( 3, 4)); */



// Without writting any new functions find 3 ways to create the increment function inc.
var inc = liftf(add)(1);
// console.log(inc(5));
var inc2 = curry(add, 1);
// console.log(inc2(5));
var inc3 = addf(1);
// console.log(inc3(5));

//LET THE FUNCTIONS DO THE WORK!!



// twice function that takes a binary function and return a function that passes its argument the binary function twice
function twice(f) {
    return function(x) {
        return f(x, x);
    };
}
//console.log( twice(sub)(3) );
var square = twice(mul);
var doubl = twice(add);


// reverse arguments function
function reverse(f) {
    return function(x, y) {
        return f(y, x);
    };
}
//console.log( reverse(sub)(11, 9) ); // -2

// ES6 generalized version
function reverseES6(f) {
    return function (...args) {
        return f(...args.reverse());
    };
}



// composeu function that takes two unary functions and returns a unary one that calls them both
function composeu(f, g) {
    return function (x) {
        return g(f(x));
    };
}
/* console.log(
    composeu(doubl, square)(5),
    composeu(square, doubl)(5)
); */



// composeb function that takes two binary functions and returns a ternary one that calls them both
function composeb(f, g) {
    return function (x, y, z) {
        return g(f(x, y), z);
    };
}
/* console.log(
    composeb(add, mul)(2, 3, 5)
); */



// limit function that tkes a binary function and a limit number and returns a function that can be called only the number of times specified by the limit number. After that it will return undefined
function limit(f, limit) {
    var callsCount = 0;
    return function(x, y) {
        callsCount += 1;
        return (callsCount <= limit) ? 
            f(x, y) : 
            undefined;
    };
}
var lAdd = limit(add, 5);
/* console.log(
    lAdd(1, 2),
    lAdd(20, 3),
    lAdd(15, 7),
    lAdd(5, 17),
    lAdd(50, 7),
    lAdd(5, 70),
); */



// from function that takes a value and produces a generator that increments that value on each call (generator)
function from(x) {
    return function() {
        return x++;
    };
}
var index = from(5);
/* console.log(
    index(),
    index(),
    index(),
    index()
); */


// to function that takes a generator and the final value and returns a function that returns undefined when and after that end value has been reached
function to(gen, end) {
    return function() {
        var val = gen();
        return (val < end) ? 
            val : 
            undefined;
    };
}

var limitedIndex = to(from(1), 6);
/* var ind;
while ( ind = limitedIndex() ) { // doesn't works starting at 0
    console.log(ind);
}
 */




// fromTo binary function that produces a limited generator (values in a range)
/* function fromTo(x, y) {
    return function() {
        var val = x;
        return (++x <= y) ?
            val : 
            undefined;
    };
} */
// Better alternative using previous from and to
function fromTo(x, y) {
    return to(
        from(x), 
        y
    );
}
var rangedIndex = fromTo(10, 20);
/* var ind2;
while ( ind2 = rangedIndex() ) { // doesn't works starting at 0
    console.log(ind2);
} */
 



// element() function that takes an array and a generator and reutns a generator that produces elements form the array
// var el = element(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'], fromTo(3, 9));
/* function element(arr, gen) {
    return function() {
        var ind = gen();
        return (ind !== undefined) ?
            arr[ind] :
            undefined;
    };
}
var arrGen = element(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'], fromTo(3, 9));
var el;
while ( el = arrGen() ) { 
    console.log(el);
} */



// Make the generator argument optional in the element() function, if not passed make the function return all elements
function element(arr, gen) {
    if (typeof gen !== 'function'){
        gen = fromTo(0, arr.length);
    }
    return function() {
        var ind = gen();
        return (ind !== undefined) ?
            arr[ind] :
            undefined;
    };
}
var arrGen = element(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']);
var el;
while ( el = arrGen() ) { 
    console.log(el);
}
 


