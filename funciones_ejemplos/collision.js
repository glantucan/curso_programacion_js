'use strict';
function areColliding(carA, carB) {
    var doCollide = false;
    var canCollideX = false;
    var canCollideY = false;

    // Comprueba si solapan en la coordenada X
    if ( carA.x <= carB.x ) {
        if ( carA.x + carA.width > carB.x ) {
            canCollideX = true;
        }
    } else {
        if( carB.x + carB.width > carA.x) {
            canCollideX = true;
        }
    }
    // Comprueba si solapan en la coordenada Y 
    if ( carA.y <= carB.y ) {
        if ( carA.y + carA.height > carB.y ) {
            canCollideY = true;
        }
    } else {
        if( carB.y + carB.height > carA.y) {
            canCollideY = true;
        }
    }

    // Si solapan en las dos coordenadas están colisionando
    if (canCollideX && canCollideY) {
        doCollide = true;
    }
    return doCollide;
}

var myCar = {
    x: 50,
    y: 100,
    width: 25,
    height: 15
};

var nastyTruck = {
    x: 40,
    y: 112,
    width: 17,
    height: 35
};

var neighbourBike = {
    x: 140,
    y: 105,
    width: 12,
    height: 5
};

var collidingWithTruck = areColliding(myCar, nastyTruck);   // true
var collidingWithBike = areColliding(myCar, neighbourBike); // false

console.log(collidingWithTruck);
console.log(collidingWithBike);