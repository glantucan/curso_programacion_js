Funciones en Javascript

TODO:
* Lo básico
    - [x] Reutilización
    - [x] Llamar, ejecutar, invocar
    - [ ] Anatomía de una función  
        - [ ] Parámetros, argumentos y valores de retorno
        - [ ] Devolver y console.log()
    - [ ] Ámbito  
        - [ ] Definir funciones al principio o al final da lo mismo
        - [ ] ambito de variables sin anidar
  
---  

<!-- TOC -->

- [1. Lo Fundamental](#1-lo-fundamental)
    - [Reciclar es importante](#reciclar-es-importante)
    - [Reciclar no lo es todo](#reciclar-no-lo-es-todo)
- [2.- Una función muy sencilla](#2--una-función-muy-sencilla)
        - [Ejercicios de funciones simples](#ejercicios-de-funciones-simples)
- [3.- Funciones con parámetros](#3--funciones-con-parámetros)
            - [Pasarle valores a un programa con Node.js al ejecutarlo](#pasarle-valores-a-un-programa-con-nodejs-al-ejecutarlo)
    - [Funciones con más de un parámetro](#funciones-con-más-de-un-parámetro)
- [4.- Funciones que devuelven un valor](#4--funciones-que-devuelven-un-valor)
    - [Recapitulación](#recapitulación)
    - [EJERCICIOS](#ejercicios)
- [5. Reglas de ámbito (1ª parte)](#5-reglas-de-ámbito-1ª-parte)
- [6.- Ejercicios del tema](#6--ejercicios-del-tema)

<!-- /TOC -->

## 1. Lo Fundamental

Una función es un bloque de código ejecutable al que podemos llamar en cualquier momento, cada vez que lo necesitemos.

### Reciclar es importante
Crear funciones es otra forma de reutilizar código, como los bucles, pero en vez de repetirse indefinidamente, su bloque de código se ejecuta una sola vez cuando las invocamos.

En esencia lo que hacemos es ponerle un nombre a un grupo de líneas de código, de forma que después para ejecutarlo lo llamamos por ese nombre.


### Reciclar no lo es todo

Las funciones no son útiles sólo porque permitan reutilizar código. También se utilizan para agrupar bloques de código complejo que queremos mantener aparte de nuestro programa principal, porque desvían la atención a la hora de entender lo que hace nuestro código en líneas generales. Aunque sólo llamemos una vez a las funciones creadas con este objetivo, no desestimes esta opción cuando tu código se haga difícil de entender.

Recuerda que el arte de programar consiste en resolver problemas analizándolos parte por parte, separando cada problema en partes más fáciles de entender, es decir, problemas más sencillos de resolver.

Las primeros ejemplos que vamos a ver pertenecen a esta categoría, porque para ver la reutilización a través de funciones en todo su esplendor tendremos que crear programas más complejos. De todos modos veremos ejemplos de ambos tipos de funciones.

## 2.- Una función muy sencilla
Esto es la definición de una función:

```js
function saludar() {
    console.log("¡Buenos días!");
    console.log("Hoy hace un día precioso ¿No crees?");
}
```
Y esta es la sentencia que escribimos cuando queremos ejecutar la función `saludar`.

```js
saludar();
```

Este ejemplo no es demasiado útil, pero imaginemos que `saludar` es lo primero que queremos que haga nuestra aplicación y `despedirse` es lo último que queremos  que haga. El código de nuestro programa sería algo así:

```js
'use strict';
function saludar() {
    console.log("¡Buenos días!");
    console.log("Hoy hace un día precioso ¿No crees?");
}

function despedirse() {
    console.log("¿Ya te vas?");
    console.log("Bueno, ha sido un placer, hasta pronto!");
}

saludar();

// Hago de código realmente útil aquí ;P

despedirse();
```

Hemos definido dos funciones nada más empezar. No es necesario que estén al principio del programa, pero de momento vamos a definir las funciones antes de usarlas.

Después al llegar a la línea que dice

```js
saludar();
```
le estamos diciendo al progrma que recuerde el código dentro del bloque de la función definida como `saludar` y lo ejecute.

Después se supone que tenemos la sección del programa que realmente hace algo, más allá de saludar y despedirse. No nos importa que hay aquí, ahora estamos hablando de las funciones `saludar` y `despedirse`

Por último, tenemos la sentencia:

```js
despesdirse();
```
De nuevo el programa reconoce `despedirse` como el nombre de una función que ya está definida, ve que hay un doble paréntesis detrás y eso le indica que debe ejecutar el bloque de código dentro de la función.

Creo que si lees el programa con atención podrás llegar a las siguientes conclusiones tu misma:

**Para definir una función**, en su forma más simple:

* Usamos la palabra clave `function`.
* Escribimos el nombre que le queremos dar a la función.  
    (`saludar` y `despedirse` en este ejemplo)
* Después abrimos y cerramos paréntesis `()`
* Abrimos una llave, `{`.
* Escribimos el bloque de código que queremos que se ejecute cuando llamemos a la función. 
  Fíjate en que el margen adicional del código dentro de la función ayuda a entender a simple vista que pertenece a la función. Te recomiendo que siempre escribas tus funciones siguiendo este formato.
* Cerramos el bloque cerrando la llave `}`.

Cuando se ejecuta el programa, el bloque de código dentro de estas funciones no se ejecuta directamente. Se guarda en la memoria para poder ser ejecutado más adelante.


**Para ejecutar una funcíón** escribimos su nombre seguido de paréntesis,`()`.  
Entonces el programa recuerda que habíamos definido una función con ese nombre y ejecuta el código dentro de ella.


***Nota de vocabulario:*** **llamar**, **invocar** y **ejecutar** son sinónimos cuando nos referimos a una función.

Actualizaremos estas instrucciones más adelante pero de momento lo dejamos así.


#### Ejercicios de funciones simples

Vamos a practicar un poco:

1. Escribe una función que ...
2. Escribe una función que ...
3. Escribe una función que ...
4. Escribe una función que ...



## 3.- Funciones con parámetros

Bastante simple ¿no?. Vamos a complicarlo un poco. 

Supongamos que queremos un mensaje personalizado por cada usuario que ejecute el programa. Luego veremos como hacer llegar el nombre de usuario a nuestro programa con Node.js, de momento supongamos que ya lo tenemos en el programa.

Cuando definimos una función podemos especificar que datos necesita y en que variables le será  entregada cuando se la invoque.

Para recibir este valor ponemos el nombre de la variable que queremos que lo contenga dentro de la función, dentro de los paréntesis:

```js
function saludar(usuario) { //...
```

Esto es equivalente a definir la variable `usuario`. Es como si escribiéramos `function  saludar(` **`var usuario`** `) { // ...`. ¡¡¡Si hiciéramos esto el programa provocaría un error, cuidado!!!  
Si te lo escribo así es sólo para que entiendas cláramente lo que está pasando.

Así podemos utilizar esa variable dentro de la función:

```js
function saludar(usuario) {
    console.log("¡Buenos días, " + usuario + "!");
    console.log("Hoy hace un día precioso ¿No crees?");
}
```
En este contexto, `usuario` es una variable, como decía pero se le llama parámetro. Porque estamos parametrizando la función. La función producirá diferentes resultados al darle diferentes valores a ese parámetro.

Cuando llamamos a la función podemos pasarle el valor a ese parámetro dentro de los paréntesis

```js
saludar("Oscar");
```

De nuevo, para que nos entendamos, aunque no sea correcto y provoque un error si se escribe dentro de  un programa real, esto viene a ser como si escribieramos `saludar(usuario = "Oscar")`.

Ese valor será asignado al parámetro de la función de forma que ahora el mensaje de bienvenida que se mostrará es:

```
¡Buenos días, Oscar!
Hoy hace un día precioso ¿No crees?
```

Al valor que le pasamos a una función se le llama argumento.

Veamos como quedaría el programa parametrizando ambas funciones, `saludar` y `despedirse`:

```js 
'use strict';
var nombreUsuario = "Oscar";

function saludar(usuario) {
    console.log("¡Buenos días, " + usuario + "!");
    console.log("Hoy hace un día precioso ¿No crees?");
}

function despedirse(usuario) {
    console.log("¿Ya te vas, " + usuario + "?");
    console.log("Bueno, ha sido un placer, hasta pronto!");
}

saludar(nombreUsuario);

// Hago de código realmente útil aquí

despedirse(nombreUsuario);
```

Fíjate en que en el programa completo en vez de pasarle a la función un valor literal cuando la llamamos, parece que le estamos pasando una variable `usuario`.


Pero recuerda que cuando escribimos el nombre de una variable dentro de una expresión (salvo si es a la izquierda de una asignación) lo que estamos haciendo es evaluar la variable, es decir devolver su valor. Esta es una manera muy conveniente de ir pasando valores de un lado a otro del programa.

Si queremos añadirle un toque elegante a nuestro programa podemos utilizar el nombre que introduzca el usuario al ejecutarlo con Node.js

En vez de empezar el programa con

```js
var nombreUsuario = "Oscar"
//...
```

Podemos empezarlo con:

```js
var nombreUsuario = process.argv[2]; 
//...
```

Así, en vez de asignarle a mano el valor que queramos a `nombreUsuario` podemos hacerlo desde la línea de comandos cuando ejecutamos el programa:

```bash
node login_logout.js Oscar
```
Y el nombre de usuario viajará mágicamente desde la línea de comandos hasta el parámetro de las funciones.

[aside c="true" t="unrelated" subject="<code>process.argv</code>"]

##### Pasarle valores a un programa con Node.js al ejecutarlo

Con Node.js podemos pasar valores al programa que queremos ejecutar detrás del nombre del mismo. Estos valores se almacenan en la propiedad `argv` (un array) del objeto global `process`.

El primer elemento de este array será siempre `"node"`, el segundo la ruta completa del programa en el sistema de archivos, y a partir del tercero tendría almacenadas cada una de las palabras que escribiéramos detrás del nombre del programa. Por ejemplo si ejecutamos nuestro programa así:

```bash
node login_logout.js Oscar 43 
```

Dentro del programa podemos asignar a variables los parámetros introducidos:

```js
var entorno = process.argv[0]; // "node"
var nombre_del_programa = process.argv[1] // "/Users/Oscar/teaching_js/functions/login_logout.js
var nombre = process.argv[2];  // "Oscar"
var edad = process.argv[3];    // "43"
```
[/aside]


### Funciones con más de un parámetro

Vamos a sofisticar nuestro sistema de login un poco más. Hagamos que sólo pueda ejecutarse si el usuario introduce una contraseña. 

Definamos un array de objetos, uno por cada usuario permitido. cada objeto en dicho array contendrá dos propiedades: `nombre` y `clave`.
Por ejemplo:

```js
var usuariosRegistrados = [
    { nombre: "Oscar",  clave: "1234" },
    { nombre: "Lala",  clave: "lalala" },
    { nombre: "Pepe",  clave: "pepegrillo" },
    { nombre: "Carlos",  clave: "#@p4raN0iCo" }
];
```

Cuando alguien ejecuta el programa debe introducir nombre y contraseña. El programa comprobará si existe un usuario con ese nombre y si la contraseña introducida es la correcta. 

Para ello crearemos una nueva función que reciba como parámetros el nombre de usuario que está intentando ejecutar el programa, la contraseña que introduzca y la lista de usuarios registrados con sus respectivas claves.
Para poder pasarle tres valores a la función necesitamos tres parámetros que definiremos, como antes, dentro del paréntesis de la función, pero separados por comas.
```js
function esUsuarioAcreditado(nombre, clave, usuarios) {
    // Bloque de código de la función
}
```

Cuando llamemos a la función tendremos que darle tres valores, o argumentos a esos parámetros. Lo haremos dentro de los paréntesis, separándolos también con comas.

Por ejemplo:

```js
// ...
esUsuarioAcreditado("Oscar", "1234", usuariosRegistrados);
// ...
```

Como ves, al llamar a la función, estoy pasándole los argumentos en el mismo orden en el que están definidos los parámetros. Esto siempre debe ser así. Javascript no sabe lo que significa cada parámetro y no tiene otra forma de asignar el valor correcto acada parámetro.

Fíjate en que los dos primeros argumentos son valores literales, mientras que el tercero es el nombre de una variable definida al principio del programa. Como te he expplicado antes, podemos pasar a una función valores literales o la evaluación de una variable. En cualquier caso la función recibirá los valores, tanto si eran literales como si son el resultado de evaluar una variable.

El listado siguiente, muestra una de las posibles formas de implementar un login con contraseña. No es la forma más elegante como veremos más adelante, pero nos vale por ahora. Símplemente definimos la función `esUsuarioAcreditado` y la ejecutamos antes de llamar a las otras funciones que ya teníamos definidas.

Esta nueva función echará al usuario del programa usando la función predefinida `process.exit()` de Node.js.


```js
'use strict';

var nombreUsuario = process.argv[2]; 
var clave = process.argv[3]; 

var usuariosRegistrados = [
    { nombre: "Oscar",  clave: "1234" },
    { nombre: "Lala",  clave: "lalala" },
    { nombre: "Pepe",  clave: "pepegrillo" },
    { nombre: "Carlos",  clave: "#@p4raN0iCo" }
];

function saludar(usuario) {
    console.log("¡Buenos días, " + usuario + "!");
    console.log("Hoy hace un día precioso ¿No crees?");
}

function despedirse(usuario) {
    console.log("¿Ya te vas, " + usuario + "?");
    console.log("Bueno, ha sido un placer, hasta pronto!");
}

function esUsuarioAcreditado(nombre, clave, usuarios) {
    var puedeEntrar = false;
    var idx = 0; // contador para el índice del array de usuarios
    do {
        var usuario = usuarios[idx];
        if (nombre == usuario.nombre) {
            if (clave == usuario.clave) {
                puedeEntrar = true;
            }
        }
        idx++;
    } while (!puedeEntrar && idx < usuarios.length)

    if (puedeEntrar) {
        console.log("Usuario y contraseña correctos");
    } else {
        console.log("Usuario o contraseña no reconocidos.\nAcceso denegado!!!");
        process.exit();
    }
}

esUsuarioAcreditado(nombreUsuario, clave, usuariosRegistrados);
saludar(nombreUsuario);

// Hago de código realmente útil aquí

despedirse(nombreUsuario);
```
    
## 4.- Funciones que devuelven un valor

...

Estrictamente hablando, las funciones siempre devuelven un valor. Si no escribimos una sentencia `return ...` que devuelva un valor, la función devolverá el valor `undefined` por defecto.  



Como ves no tenemos que volver a escribir el cálculo para cada una de ellas, llamamos a la función por su nombre y le pasamos entre paréntesis el valor que XXX

La instrucción ´return´ se encarga de devolver el valor calculado de forma que podamos asignarlo a una variable.


Las funciones pueden recibir más de un valor de entrada y ser mucho más complejas internamente. Por ejemplo, esta otra función comprueba si dos vehículos en un juego de coches (2D) colisionan:

```js
function detectarColision(carA, carB) {
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

var miCoche =   { x: 50,  y: 100, width: 25, height: 15 };
var camion =    { x: 40,  y: 112, width: 17, height: 35 };
var bicicleta = { x: 140, y: 105, width: 12, height: 5  };

var colisionConCamion = detectarColision(miCoche, camion);   // true
var colisionConBici = detectarColision(miCoche, bicicleta); // false
```

El código al final del listado anterior sólo sirve para comprobar como opera la función. En una aplicación real podríamos usar la función anterior para expresar decisiones de una forma muy fácil de entender:

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

Crear funciones, en cierto modo, es añadir vocabulario al lenguaje de programación. Un vocabulario que nos ayuda a escribir y entender la lógica del programa. Por eso es tan importante que elijas bien el nombre de tus funciones. Si haces esto bien, no tendrás que ir a buscar la definición de cada función, para ver que hace, cuando la veas escrita en una línea del programa.


### Recapitulación


**Para definir una función**:

* Usamos la palabra clave `function`.
* Escribimos el nombre que le queremos dar a la función.
* Después abrimos y cerramos paréntesis `()`.  
    Si queremos que la función reciba valores de entrada, escribiremos el nombre de los parámetros que los reciben entre estos paréntesis y separados por comas.
* Abrimos una llave, `{`.
* Escribimos el bloque de código que queremos que se ejecute cuando llamemos a la función. 
  Recuerda añadir un margen adicional (un tabulador) a la izquierda de todas las sentencias que escribas dentro de este bloque. Así te será más fácil distinguir que código se ejecutará cuando llames a la función
* Cerramos el bloque cerrando la llave `}`.

**Para ejecutar una funcíón** escribimos su nombre seguido de paréntesis,`()`. 

* Si la función tiene parámetros definidos y no le pasamos valores, esos parámetros tomarán el valor `undefined`
* Si la función tiene parámetros definidos podemos pasarle los valores para esos parámetros dentro de los paréntesis, separados por comas, y en el mismo orden que los parámetros.
* El valor que devuelve la función (`undefined` si no devolvemos uno explícitamente con una sentencia `return ...`) reemplazará el lugar que ocupa la llamada a la función y será evaluado en ese contexto.  
    Por ejemplo: Si la llamada a la función está a la derecha de una expresión de asignación el valor devuelto por la función será asignado a la variable.


Ejemplos:

```js

function aplicarImpuestos(baseImponible, iva, irpf) {
    return baseImponible * ( 1 + iva/100 - irpf/100);
}

totalFactura = aplicarImpuestos(1000, 21, 18);

function saludar() {
    console.log("Hola, hoy va a ser un gran día");
}

saludar();


function obtenerHoraActual() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    return horas + ":" + minutos + ":" + segundos;
}

console.log( obtenerHoraActual() );

```

![](imgs/funciones/function_basics.png)



### EJERCICIOS


## 5. Reglas de ámbito (1ª parte)

* Donde definir las funciones
    - [ ] Da igual antes o después de usarlas
        - [ ] Pero cuidado veremos que hay otras formas de declarar funciones que no permiten esta flexibilidad, aunque tendrán sus propias ventajas
* Que variables pueden usar:
    - [ ] De momento nos quedamos con que una función sólo puede acceder a las variables que están definidas dentro de ella misma.
    - [ ] Hay mas chicha con ámbitos anidados -> para el tema siguiente







## 6.- Ejercicios del tema
1. 7 y media
2. Black jack
3. 3 en raya

