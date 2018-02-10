# Funciones en Javascript

## TODO:
* Lo básico
    - [x] Reutilización
    - [x] Llamar, ejecutar, invocar
    - [ ] Anatomía de una función  
        - [ ] Parámetros, argumentos y valores de retorno
        - [ ] Devolver y console.log()  
- [ ] Ámbito  
    - [ ] Definir funciones al principio o al final da lo mismo
    - [ ] ambito de variables
    - [ ] funciones dentro de otras
- [ ] Por valor y por referencia  
- [ ] Componiendo funciones
- [ ] Declarar una función dentro de una expresión
- [ ] Pasando y devolviendo funciones.  
- [ ] Clausuras  


## 1. Lo básico

Una función es un bloque de código ejecutable al que podemos llamar en cualquier momento, cada vez que lo necesitemos.

### Reciclar es importante
Crear funciones es otra forma de reutilizar código como los bucles, pero en vez de repetirse indefinidamente, su bloque de código se ejecuta una sola vez cuando las invocamos.

En esencia lo que hacemos es ponerle un nombre a un grupo de líneas de código, de forma que después para ejecutarlo lo llamamos por ese nombre.


### Reciclar no lo es todo

Las funciones no son útiles sólo porque permitan reutilizar código. También se utilizan para agrupar bloques de código complejo que queremos mantener aparte de nuestro programa principal, porque desvían la atención a la hora de entender lo que hace nuestro código en líneas generales. Aunque sólo llamemos una vez a las funciones creadas con este objetivo, no desestimes esta opción cuando tu código se haga difícil de entender.

Recuerda que el arte de programar consiste en resolver problemas analizándolos parte por parte, separando cada problema en partes más fáciles de entender, es decir, problemas más sencillos de resolver.

Las primeros ejemplos que vamos a ver pertenecen a esta categoría, porque para ver la reutilización a través de funciones en todo su esplendor tendremos que crear programas más complejos. De todos modos veremos ejemplos de ambos tipos de funciones.

### El primer ejemplo
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



### Funciones con parámetros

Bastante simple ¿no?. Vamos a complicarlo un poco. 

Supongamos que queremos un mensaje personalizado por cada usuario que ejecute el programa. Luego veremos como hacer llegar el nombre de usuario a nuestro programa con Node.js, de momento supongamos que ya lo tenemos en el programa.

Cuando definimos una función podemos especificar que datos necesita y en que variables le será  entregada cuando se la invoque.

Para recibir este valor ponemos el nombre de de la variable que queremos que lo contenga dentro de la función, dentro de los paréntesis:

```js
function saludar(usuario) { //...
```

Esto es equivalente a definir la variable `usuario` con `var`. 
Así podemos utilizar esa variable dentro de la función:

```js
function saludar(usuario) {
    console.log("¡Buenos días, " + usuario + "!");
    console.log("Hoy hace un día precioso ¿No crees?");
}
```
En este contexto, `usuario` es una variable, pero se le llama parámetro de la función.

Cuando llamamos a la función podemos pasarle el valor para ese parámetro dentro de los paréntesis

```js
saludar("Oscar");
```
Ese valor será asignado al parámetro de la función de forma que ahora el mensaje de bienvenida que se mostrará es:

```
¡Buenos días, Oscar!
Hoy hace un día precioso ¿No crees?
```

Al valor que le pasamos a una función se le llama argumento.

Aplicando esto a la otra función nuestro programa quedaría así:

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

Fíjate en que en programa completo en vez de pasarle a la función un valor literal cuando la llamamos, parece que le estamos pasando el valor de una variablemente previamente definida y asignada. 

Pero recuerda que cuando escribimos el nombre de una variable que ya ha sido definida dentro de una expresión (salvo si es a la izquierda de una asignación) lo que estamos haciendo es evaluar la variable, es decir devolver su valor. 

Esta es una manera muy conveniente de ir pasando valores de un lado a otro del programa.

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

## Funciones con más de un parámetro

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

Fíjate en que los dos primeros argumentos son valores literales, mientras que el tercero es el nombre de una variable definida al principio del programa. Como te he expplicado antes, podemos pasar a una función valores literales o la evaluación de una variable. En cualquier caso la función recibirá los valores, tanto si eran literales como si son el resultado de evaluar una variable. 


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








## X. Funciones puras

Mira este ejemplo:

```js
function aplicarImpuestos(totalFactura) {
    var iva = 21;
    var irpf = 18;
    return cantidad * ( 1 + iva - irpf);
}

var totalFactura_1 = aplicarImpuestos(1000);  // 1030
var totalFactura_2 = aplicarImpuestos(340);   // 350.2
var totalFactura_3 = aplicarImpuestos(2735);  // 2817.05
```

Las primeras 5 líneas de código *definen* la función `aplicarImpuestos`. Una vez definida podemos llamarla por su nombre para sumar el IVA y restar el IRPF en cada una de nuestras facturas.

En cada una de las últimas 3 líneas de código estamos llamando a esa función para aplicar esos impuestos a los totales de tres facturas diferentes.
 
La instrucción ´return´ se encarga de devolver el valor calculado de forma que podamos asignarlo a una variable.

En este ejemplo el bloque de código realiza una transformación del valores que recibe y devuelve el resultado. 
En este sentido, esta es una función bastante parecidas a las funciones matemáticas. Por ejemplo la función *f(x) = x<sup>2</sup>* transforma cada valor *x* que le damos en otro valor que es el cuadrado del anterior.

Una función que transforma los valores que recibe como parámetro en otro valor que devuelve como resultado, y todo ello si utilizar información de sistemas externos a la propia función, es una ***función pura***.


### Funciones impuras
Se pueden crear funciones que no son puras, o sea que no realizan una transformación de un valor, o lo hacen accediendo a sistemas o variables externas. 

Hay muchas tareas interesantes en un programa que no son simplemente transformaciones en sentido matemático: Mostrar algo en pantalla, escribir en un archivo, descargar un archivo de internet, etc., 
Este tipo de funciones, que podemos llamar *procedimientos* o *subrutinas*, no tienen por qué recibir parámetros o devolver un valor.

Por ejemplo, la siguiente función muestra la fecha en la consola:

```js
function mostrarFecha() {
    var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var weekDays = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 
        'sábado', 'domingo'];

    var today = new Date();

    var weekDay = weekDays[ today.getDay() ];
    var monthDay = today.getDate();
    var month = months[ today.getMonth() ];
    var year = today.getFullYear();

    console.log('Hoy es ' + weekDay + ' ' + monthDay + ' de ' + month + ' de ' + year);
}

mostrarFecha();
```

Esta función utiliza dos sistemas externos a ella: el que permite obtener la fecha del ordenador mediante el uso del objeto `Date` y el que permite mostrar texto en la consola a través del objeto `console` y su método `log`.

[aside t="clarify"]  

La expresión 'new Date()` que utiliza el ejemplo es un poco especial y no la hemos visto todavía. Básicamente crea un objeto fecha.

`new` se utiliza para invocar la función constructora de un prototipo de objeto para crear copias del mismo. En este caso la del objeto `Date`.  Hablaremos más adelante de `new`y de los prototipos de objeto.

También conviene que sepas que `Date` no forma parte del lenguaje javascript, sino que forma parte de una de las librerías que Node.js (o cualquier navegador) pone a nuestra disposición directamente, como `Math` o `console`.

[/aside]


Sin entrar en demasiado detalle, te diré que la distinción entre funciones puras y subrutinas es importante, pero demasiado sutil como para preocuparnos demasiado por ella en este momento. 
Una función pura siempre se puede copiar tal cual en otro programa y funcionará a la primera, porque no depende de ningún factor externo.


[aside t="in-depth"]
Usar sistemas externos a nuestro programa, como acceder a un dispositivo de salida (la pantalla en este caso) es, para muchos la única excusa para usar funciones impuras.
Es muy fácil, y puede parecer útil, acabar escribiendo la función `aplicarImpuestos()` de esta forma:

```js
var iva = 21;
var irpf = 18;
// ...

function aplicarImpuestos(totalFactura) {
    return cantidad * ( 1 + iva - irpf);
}

var totalFactura_1 = aplicarImpuestos(1000);  // 1030
var totalFactura_2 = aplicarImpuestos(340);   // 350.2
var totalFactura_3 = aplicarImpuestos(2735);  // 2817.05
```
De esta forma `iva` e `irpf` son accesibles a otras funciones que podrían modificar esos porcentajes, porque pueden cambiar con el tiempo.
Ahora `aplicarImpuestos` es impura, porque depende de dos valores variables que no recibe como parámetro. Esto la hace impredecible en cierta manera. En dos momentos diferentes de la ejecución del programa podría valores diferentes si entre medias se han modificado los valores de `iva` e `irpf`.
Puede no parecer muy preocupante en este ejemplo sencillo, pero a medida que nuestros programas se hacen más complejos usar funciones no puras complica la tarea de gestionar, mantener y buscar posibles errores en el código.

Es cierto que es imposible escribir programas útiles sin usar sistemas externos, es decir, sin usar funciones impuras. Sin embargo, como consejo general intenta crear funciones impuras solo para lo que sea necesario. 
En este caso, podemos mantener `iva` e `irpf` definidas fuera de la función y al hacer la función pura si pasamos como parámetro estos dos valores:

```js
var iva = 21;
var irpf = 18;
// ...

function aplicarImpuestos(totalFactura, ivaAct, irpfAct) {
    return cantidad * ( 1 + ivaAct - irpfAct);
}

var totalFactura_1 = aplicarImpuestos(1000, iva, irpf);  // 1030
var totalFactura_2 = aplicarImpuestos(340, iva, irpf);   // 350.2
var totalFactura_3 = aplicarImpuestos(2735, iva, irpf);  // 2817.05
```

[/aside]




## Ejercicios

1. 7 y media
2. Black jack
3. 3 en raya