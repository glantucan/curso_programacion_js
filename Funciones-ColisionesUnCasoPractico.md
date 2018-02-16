
Un problema habitual en programación de video juegos es detectar colisiones entre los objetos del juego, para destruir los que colisionen (suponiendo que esa sea la mecánica del juego).

A primera vista este problema puede parecer abrumador. Pero no lo es tanto si lo analizamos y separamos en partes independientes que sean más fáciles de resolver. Acompáñame en ese proceso para que veas una de las maneras de resolverlo (hay tantas como programadores en el planeta)

Primero voy a hacer una lista de lo que necesito:

    1. Una lista con todos los vehículos del juego que pueden colisionar.
    2. Una forma de hacer comprobaciones y tomar decisiones a intervalos regulares, para poder comprobar si hay colisiones y destruir vehñiculos si procede
    3. Una forma de hacer estas comporbaciones vehículo por vehículo de manera ordenada. Para cada vehículo tengo que comprobar si colisiona con cualquiera de los otros vehículos
    4. Una forma de comprobar si dos vehículos concretos colisionan
    5. Una forma de destruir cada vehículo participante en una colisión.

Cuando el problema a resolver es complejo haz una lista de sus partes. Intenta ser lo más preciso que puedas al describirlas, porque esto te ayudara enormemente a resolver cada parte.

No sabes lo importante que es hacer esta lista. Muchos de los alumnos que he tenido se resisten a dedicar tiempo a analizar el problema. En lugar de esto se ponen a teclear como locos lo que creen que va a ser la soulución, seguros de que eso de coger un papel y un boli y anotar lo que necesita hacer su programa es una pérdida de tiempo.

Esto es un error imperdonable. Si lo cometes, descubrirás unas horas después que estás perdido en tu propio código y probablemente tendrás que volver a empezar.

No sólo es imperdonable por la pérdida de tiempo que implica, lo es también porque se está malinterpretando cual es el trabajo de un programador. 

Nuestro tabajo no es teclear código. Probablemente en unos años estés dictándole el código verbalmente a la máquina o se habrá inventado alguna otra interfaz ingeniosa que nos permita ahorrar tiempo y esfuerzo en la tarea mecánica de introducir el código. 

Tu trabajo es pensar, analizar y resolver problemas. El producto final es el código, pero la mayor parte del tiempo lo vas a pasar pensando como tiene que realizar su tarea y como organizarlo.

En los años que llevo programando no he conocido a un sólo programador que no tenga papel y lapiz al lado del ordenador. Ayuda mucho dibujar un diagrama del programa, con sus flechas, sus colores, sus tachones para marcar callejones sin salida, etc. Hacer eso en la pantalla es mucho más difícil. Hacerlo de cabeza casi imposible.


 Como las formas de los objetos pueden ser complejas y difíciles de convertir en valores matemáticos con los que se pueda operar, lo más habitual es utilizar lo que se denomina *caja contenedora* (*bounding box*) del objeto para comprobar si solapa con la caja de otros objetos.

He aquí un ejemplo de como resolver ese problema con una función.

```js
function detectarColision(movilA, movilB) {
    var enColision = false;
    var solapamientoEnX = false;
    var solapamientoEnY = false;

    // Comprueba si solapan en la coordenada X
    if ( movilA.x <= movilB.x ) {
        if ( movilA.x + movilA.width > movilB.x ) {
            solapamientoEnX = true;
        }
    } else {
        if( movilB.x + movilB.width > movilA.x) {
            solapamientoEnX = true;
        }
    }
    // Comprueba si solapan en la coordenada Y 
    if ( movilA.y <= movilB.y ) {
        if ( movilA.y + movilA.height > movilB.y ) {
            solapamientoEnY = true;
        }
    } else {
        if( movilB.y + movilB.height > movilA.y) {
            solapamientoEnY = true;
        }
    }

    // Si solapan en las dos coordenadas están colisionando
    if (solapamientoEnX && solapamientoEnY) {
        enColision = true;
    }
    return enColision;
}

var miCoche =   { x: 50,  y: 100, width: 25, height: 15 };
var camion =    { x: 40,  y: 112, width: 17, height: 35 };
var bicicleta = { x: 140, y: 105, width: 12, height: 5  };

var colisionConCamion = detectarColision(miCoche, camion);   // true
var colisionConBici = detectarColision(miCoche, bicicleta); // false
```

El código al final del listado anterior sólo sirve para comprobar como opera la función. 

En una aplicación real detectar colisiones entre dos vehículos forma parte de un problema mayor. Detectar todas las colisiones que ocurren en cada momento para destruir los vehículos implicados (suponiendo que ésta fuera la mecánica del juego). 

 la función sólo resuelve una parte del problema. Por eso creamos podríamos usar la función anterior para expresar decisiones de una forma muy fácil de entender:

```js
function actualizar(vehiculos) {
    //...
    var vehiculosADestruir = [];
    for (var act = 0; act < vehiculos.length; act++) {
        vehiculoAct = vehiculos[act];
        for (var otro = 0; otro < vehiculos.length; otro++ ) {
            otroVehiculo =  vehiculos[otro];
            if (act != otro) {
                if (detectarColision(vehiculoAct, otroVehiculo)) {
                    vehiculosADestruir.push(vehiculoAct);
                    vehiculosADestruir.push(otroVehiculo);
                }
            }
        }
    }
    if (vehiculosDestruidos.length > 0) {
        destruirVehiculos(vehiculosADestruir);
    }
    //...
}
```
Aquí hemos creado otra función, `actualizar()`, para comprobar cada cierto tiempo si tenemos que actualizar el estado de cualquiera de nuestros objetos de juego. Una de las posibles comprobaciones son las colisiones, que vamos a suponer que siempre destruyen los vehículos implicados.

Esta función recorre el array de vehículos (que son objetos con las propiedades del ejemplo anterior) y para cada elemento comprueba si está colisionando con cada uno de los otros vehiculos.

Si `detectarColision(vehiculoAct, otroVehiculo)` añade ambos a la lista de vehiculos a destruir. Cuando termina de ejecutar los bucles anidados comprueba si ha vehiculos a destruir y si es así llama a otra función que se encarga del "desguace", `destruirVehiculos()` (no mostrada aquí).

Si te ha costado seguir la lógica de los bucles y condicionales anidadas, imagínate lo difícil que sería entender el código si todo el contenido de `detectarColision` estuviera dentro de estos bucles. 

Probablemente en un juego real esta función haría mucho más que eso, y suele ser una pieza muy importante de la arquitectura de cualquier juego. Por eso es tan importante que la lógica de decisión dentro de ella sea lo más clara posible. Crear funciones para cada comprobación y para cada acción a realizar como consecuencia es una buena idea, la mejor en la mayoría de los casos.