Funciones en Javascript

TODO:
* Lo básico
    - [x] Reutilización
    - [x] Llamar, ejecutar, invocar
    - [ ] Anatomía de una función  
        - [ ] Parámetros, argumentos y valores de retorno
            - [x] Funciones con uno y varios parámetros
            - [ ] Valores de retorno
            - [ ] Devolver y console.log()
    - [ ] Ámbito  
        - [ ] Definir funciones al principio o al final da lo mismo
        - [ ] ambito de variables sin anidar
  
---  

Las funciones son la base de lo que en inglés se denomina **DRY** (*Don't repeat yourself*). Es decir, intenta no repetir varias veces el mismo código o código muy parecido en tu programa. Mete ese código en una cápsula ejecutable y, cuando quieras usarla, llámala por su nombre. Eso es básicamente una función, una cápsula de código con nombre. 

La forma particular en la que operan en javascript es especialmente poderosa. De hecho, yo diría que las funciones son su superpoder. 

No es que este lenguaje fuera el primero en introducir las características que las hacen tan especiales, pero si fue el primero en el que fueron aprovechadas en aplicaciones de difusión. Estoy hablando de **clausuras**, **lambdas** y otras virguerías que están implementadas en javascript desde sus orígenes. 

En este capítulo empezamos desde cero, y sentaremos las bases para llegar a entender y utilizar esos conceptos.

<!--more-->

<!-- TOC -->

- [1. Conceptos básicos](#1-conceptos-básicos)
    - [Reciclar es importante](#reciclar-es-importante)
    - [Reciclar no lo es todo](#reciclar-no-lo-es-todo)
- [2.- Una función muy sencilla](#2--una-función-muy-sencilla)
    - [Ejercicios de funciones sencillas](#ejercicios-de-funciones-sencillas)
- [3.- Funciones con parámetros](#3--funciones-con-parámetros)
    - [Funciones con más de un parámetro](#funciones-con-más-de-un-parámetro)
    - [Ejercicios de funciones con parámetros](#ejercicios-de-funciones-con-parámetros)
- [4.- Funciones que devuelven un valor](#4--funciones-que-devuelven-un-valor)
    - [Recapitulación](#recapitulación)
    - [EJERCICIOS](#ejercicios)
- [5. Reglas de ámbito (1ª parte)](#5-reglas-de-ámbito-1ª-parte)
    - [Reglas de ámbito para variables.](#reglas-de-ámbito-para-variables)
- [6.- Ejercicios del tema](#6--ejercicios-del-tema)

<!-- /TOC -->

## 1. Conceptos básicos

Una función es un bloque de código ejecutable al que podemos llamar en cualquier momento, cada vez que lo necesitemos.

### Reciclar es importante
Crear funciones es otra forma de reutilizar código, como los bucles, pero en vez de repetirse indefinidamente, su bloque de código se ejecuta una sola vez cuando las invocamos.

En esencia lo que hacemos es ponerle un nombre a un grupo de líneas de código, de forma que después para ejecutarlo lo llamamos por ese nombre.

Este uno de los motivos fundamentales por los que utilizamos funciones, pero no el único.
### Reciclar no lo es todo

Las funciones también se utilizan para agrupar bloques de código complejo que queremos mantener aparte de nuestro programa principal, porque desvían la atención a la hora de entender lo que hace nuestro código en líneas generales. Aunque sólo llamemos una vez a las funciones creadas con este objetivo, no desestimes esta opción cuando tu código se haga difícil de entender.

Recuerda que el arte de programar consiste en resolver problemas analizándolos parte por parte, separando cada problema en partes más fáciles de entender, es decir, problemas más sencillos de resolver.

Si al planificar nuestro programa somos capaces de separarlo en 10 pequeños problemas que debemos resolver, lo ideal es que hubiera una función para resolver cada pequeño problema.

Las primeros ejemplos que vamos a ver pertenecen a esta categoría, porque para ver la reutilización a través de funciones en todo su esplendor tendremos que crear programas más complejos. De todos modos veremos ejemplos de ambos aplicaciones.

## 2.- Una función muy sencilla
Sin más rodeos, esto es la definición de una función:

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

// Algo de código realmente útil aquí ;P

despedirse();
```

Hemos definido dos funciones nada más empezar (líneas 1 a 10). No es necesario que estén al principio del programa, pero de momento vamos a definir las funciones antes de usarlas.

El código dentro de la definición de una función no se ejecuta inmediatamente. Se guarda en algún lugar de la memoria del sistema y queda a la espera de que en algún lugar del resto del programa lo ejecute.  

Al llegar a la línea 12, el motor de javascript sabe que `saludar` es el nombre de una función y es capaz de encontrar su código en la memoria por dicho nombre. Los paréntesis detrás del nombre le indican que debe ejecutar ese código. Y eso es lo que hace:

Después se supone que tenemos la sección del programa que realmente hace algo, más allá de saludar y despedirse. No nos importa que hay aquí, ahora estamos hablando de las funciones `saludar` y `despedirse`

Por último, en la línea 16, de nuevo el programa reconoce `despedirse` como el nombre de una función que ya está definida, ve que hay un doble paréntesis detrás y por eso ejecuta el bloque de código dentro de la función.

El resultado de este programa será mostrar en la consola lo siguiente:
```bash
¡Buenos días!
Hoy hace un día precioso ¿No crees?
¿Ya te vas?
Bueno, ha sido un placer, hasta pronto!
```

[aside t="clarify" c="true"]

Es posible que estés pensando, "¡Vale!, pero para hacer esto podría haber escrito un programa mucho más corto". Sin ir más lejos, con:

```js
'use strict';
console.log("¡Buenos días!");
console.log("Hoy hace un día precioso ¿No crees?");
console.log("¿Ya te vas?");
console.log("Bueno, ha sido un placer, hasta pronto!");
}
```

Obtendría exáctamente el mismo resultado. Y tendrías razón, pero lo importante del ejemplo anterior es que entiendas como definir y ejecutar funciones. Para eso necesitabamos un ejemplo realmente sencillo.

De hecho en las siguientes secciones vamos a ir construyendo algo más útil a partir de esta base, y en los ejemplos posteriores verás que tiene más sentido separar este código en funciones.

[/aside]


Creo que si has leido con atención podrás llegar a las siguientes conclusiones tu misma:

* **Para definir una función**, en su forma más simple:
  * Usamos la palabra clave `function`.
  * Escribimos el nombre que le queremos dar a la función.  
      (`saludar` y `despedirse` en este ejemplo)
  * Después abrimos y cerramos paréntesis `()`
      (como, de momento, no estamos usando parámetros, dejamos esos paréntesis vacíos)
  * Abrimos una llave, `{`.
  * Escribimos el bloque de código que queremos que se ejecute cuando llamemos a la función.  
    * Fíjate en el margen adicional del código dentro de cada función (líneas 3 a 4, y 8 a 9).  
      Esta indentación o tabulacón ayuda a entender a simple vista qué código pertenece a lafunción, de forma similar a como hacíamos en bloques de cñodigo de los bucles y las condicionales. Te recomiendo que siempre escribas tus funciones siguiendo este formato.
  * Cerramos el bloque cerrando la llave `}`.
  * No pongas `;` detras de una función.
* El programa no ejecuta el bloque de código dentro de estas funciones inmediatamente. Se guarda en la memoria para poder ser ejecutado más adelante.
* **Para ejecutar una funcíón** escribimos su nombre seguido de paréntesis,`()`.  
Entonces el programa recuerda que habíamos definido una función con ese nombre y ejecuta el código que haya dentro de ella.


[aside t="clarify" cb="false" ]
**Llamar**, **invocar** y **ejecutar** son sinónimos cuando nos referimos a una función.
[/aside]

Actualizaremos estas instrucciones más adelante pero de momento lo dejamos así.



[aside t="exercises" c="true" label="Vamos a practicar un poco"]

### Ejercicios de funciones sencillas
Estos ejercicios son tan tontos como el ejemplo que he utilizado para explicarte como crear y ejecutar funciones, pero servirán para que vayas afianzando los esos dos conceptos.
  
1. Escribe una función muestre en la consola un saludo aleatorio tomado de un array, eligiendo un índice del mismo de forma aleatoria.  
  Crea un programa que contenga a la función y la ejecute 2 veces, emulando el intercambio de saludos entre dos personas.
2. Escribe una función que muestre en cosola un número aleatorio entero entre 1 y 10. Haz que se ejecute 100 veces.
3. Escribe una función que haga preguntas sobre operaciones matemáticas sencillas, del estilo *"¿Cuánto es 2 + 2?"* en orden aleatorio y otra que responda a esas preguntas, también de forma aleatoria.  
  Usa arrays en ambas, como en el ejercicio 1, y haz que haya 5 preguntas en la primera funcion y sus correspondientes respuestas en la segunda.  
  Haz que tu programa ejecute estas funciones 5 veces alternativamente, de forma que aparezcan en consola 5 preguntas seguidas de su respuesta (como son aleatorias, lo más probable es que dichas respuestas sólo sean correctas de vez en cuando)

[/aside]


## 3.- Funciones con parámetros

Bastante simple ¿no?. Vamos a complicarlo un poco. 

Supongamos que queremos un mensaje personalizado por cada usuario que ejecute el programa. Luego veremos como hacer llegar el nombre de usuario a nuestro programa con Node.js, de momento supongamos que ya lo tenemos en una variable del programa.

Cuando definimos una función podemos especificar que datos necesita y en que variables le será  entregada cuando se la invoque.

Para recibir este valor ponemos el nombre de la variable que queremos que lo contenga dentro de los paréntesis:

```js
function saludar(usuario) { //...
```

Esto es equivalente a definir la variable `usuario`. Es como si escribiéramos `function  saludar(` **`var usuario`** `) { // ...`. Pero cuidado, esto es solo un *como si*, no debes escribirlo así nunca porque provocaría un error. Es sólo para que nos entendamos.

Así podemos utilizar esa variable dentro de la función:

```js
function saludar(usuario) {
    console.log("¡Buenos días, " + usuario + "!");
    console.log("Hoy hace un día precioso ¿No crees?");
}
```

En este contexto, `usuario` es una variable, como decía, pero se le llama parámetro. Porque estamos parametrizando la función. La función producirá diferentes resultados al darle diferentes valores a ese parámetro.

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

[aside t="important" cb="false" label="Parametro vs. argumento"]

Al **valor** que le pasamos a una función se le llama **argumento**.  
A la **variable** que que recibe ese valor en la función se le llama **parámetro**.

[/aside]

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

// Algo de código realmente útil aquí

despedirse(nombreUsuario);
```

Fíjate en que en el programa completo en vez de pasarle a la función un valor literal cuando la llamamos, parece que le estamos pasando una variable `usuario`.


Pero recuerda que cuando escribimos el nombre de una variable dentro de una expresión (salvo si es a la izquierda de una asignación) lo que estamos haciendo es evaluar la variable, es decir devolver su valor. Esta es una manera muy conveniente de ir pasando valores de un lado a otro del programa.


#### Un poco más allá

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

[aside c="true" t="needed" label="¿Para que sirve `process.argv`?"]

#### Pasarle valores a un programa con Node.js al ejecutarlo

Con Node.js podemos pasar valores al programa que queremos ejecutar detrás del nombre del mismo. Estos valores se almacenan en la propiedad `argv` (un array) del objeto global `process`.

El primer elemento de este array será siempre `"node"`, el segundo la ruta completa del programa en el sistema de archivos, y a partir del tercero tendría almacenadas cada una de las palabras que escribiéramos detrás del nombre del programa. Por ejemplo si ejecutamos nuestro programa así:

```bash
node login_logout.js Oscar 43 
```

Dentro del programa podemos asignar a variables los parámetros introducidos:

```js
var entorno = process.argv[0]; // "node"
var nombre_del_programa = process.argv[1] // "/Users/Oscar/teaching_js/functions_3.js
var nombre = process.argv[2];  // "Oscar"
var edad = process.argv[3];    // "43"
```
[/aside]


### Funciones con más de un parámetro

Vamos a sofisticar nuestro sistema de login un poco más. Hagamos que sólo pueda ejecutarse si el usuario introduce su contraseña.

Definamos un array de objetos, uno por cada usuario permitido. Cada objeto en dicho array contendrá dos propiedades: `nombre` y `clave`.
Por ejemplo:

```js
var usuariosRegistrados = [
    { nombre: "Oscar",  clave: "1234" },
    { nombre: "Lala",  clave: "lalala" },
    { nombre: "Pepe",  clave: "pepegrillo" },
    { nombre: "Carlos",  clave: "#@p4raN0iCo" }
];
```

Cuando alguien ejecute el programa, deberá introducir nombre y contraseña. El programa comprobará si existe un usuario con ese nombre y si la contraseña introducida es la correcta. 

Para ello crearemos una nueva función que reciba como parámetros: el nombre de usuario que está intentando ejecutar el programa, la contraseña que introduzca y la lista de usuarios registrados con sus respectivas claves.
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

Como ves, al llamar a la función, estoy pasándole los argumentos en el mismo orden en el que están definidos los parámetros. Esto siempre debe ser así. Javascript no sabe lo que significa cada parámetro y no tiene otra forma de asignar el valor correcto a cada parámetro.

Fíjate en que los dos primeros argumentos son valores literales, mientras que el tercero es el nombre de una variable definida al principio del programa. Como te he explicado antes, podemos pasar a una función valores literales o la evaluación de una variable. En cualquier caso la función recibirá los valores, tanto si eran literales como si son el resultado de evaluar una variable.

[aside t="in-depth" c="true"]

En realidad, cuando los argumentos son objetos, arrays o funciones, lo que recibe el parámetro es una referencia a los valores. Estos tres tipos de valor son potencialmente muy voluminosos, y el motor de javascipt, en lugar de ir moviendo esos valores de un lado a otro del programa los deja en un lugar de la memoria y lo que mueve es una referencia, que representa la dirección de la memoria en la que están almacenados.

Esto tiene su importancia, pero vamos a ignorarlo hasta un poco más adelante. Aunque haya situaciones en las que es importante tener esto presente, para los ejemplos y ejercicios con los que vamos a trabajar, de momento, podemos suponer que la función recibe siempre el valor concreto que le estamos pasando. 

A efectos prácticos el motor de javascript trata una referencia como si fuera un valor, y cuando evalúa una variable que contiene una referencia, hace el trabajo extra de recuperar el valor que representa.

[/aside]


El listado siguiente, muestra una de las posibles formas de implementar un login con contraseña. No es la forma más elegante como veremos más adelante, pero nos vale por ahora. Simplemente definimos la función `esUsuarioAcreditado` y la ejecutamos antes de llamar a las otras funciones que ya teníamos definidas.

Esta nueva función echará al usuario del programa si no introduce la contraseña correcta, usando la función predefinida `process.exit()` de Node.js.


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

// Algo de código realmente útil aquí

despedirse(nombreUsuario);
```


### Ejercicios de funciones con parámetros

1.- 
2.-
3.-


## 4.- Funciones que devuelven un valor

Si las funciones pueden recibir valores, ¿no podrán, a su vez devolver otro u otros valores al lugar del código donde fueron invocadas? ¡Por supuesto que sí!. De hecho, quizás las funciones más útiles en un programa son las que devuelven un valor.



Por ejemplo la siguiente función devuelve el área de un triángulo:

```js
function areaTriangulo(base, altura) {
    var area = base * altura /2;
    return area;
}
```

[aside t="important" cb="false"]

Para que una función devuelva un valor escribimos la palabra clave **`return`** seguida del valor que queremos que devuelva como última sentencia de la función.
Al valor que devuelve una función también se le llama **valor de retorno**.

Cuando el motor de javascript encuentre una llamada a la función, la ejecutará y, una vez calculado el valor de retorno, sustituirá la expresión de esa llamada por el valor retornado.

[/aside]



```js
var area1 = areaTriangulo(10, 3); // 15
var area2 = areaTriangulo(5, 7);  // 17.5
var areaTotal = area1 + area2;    // 32.5
```

Es más, si no vamos a utilizar las variables area1 y area2 para nada más que para calcular el area total, podemos escribir direactamente:

```js
var areaTotal = areaTriangulo(10, 3) + areaTriangulo(5, 7);  // 15 + 17.5 = 32.5
```

[aside t='important' cb="false" label="Todas las funciones devuelven un valor"]

**Las funciones siempre devuelven un valor.** 

Si no escribimos una sentencia `return ...` que devuelva un valor explícitamente, la función devolverá el valor `undefined` por defecto.

**Las llamadas a una función son expresiones**, por tanto pueden utilizarse dentro de cualquier expresión.

[/aside]

Fíjate en que este es el primer ejemplo de funciones en el que realmente estamos reutilizando código. Las funciones parametrizadas que devuelven un valor suelen ser mucho más poderosas en este sentido.

Veamos otro ejemplo, esta vez uno que no implique un cálculo matemático. Supón que, en varios lugares de nuestro programa, necesitamos transformar diferentes cadenas de texto, de forma que la primera letra de cada palabra salga en mayúsculas.  Esto es algo que se hace habitualmente para formatear títulos en un libro o en una página web.

Si una de esas cadenas fuera "las funciones en javascript son la pera", tendríamos que convertirla en "Las Funciones En Javascript Son La Pera". 

Usando lo que sabemos de manipulación de cadenas de texto, podríamos escribir algo así, para transformarla:

```js
var tituloOriginal = "las funciones en javascript son la pera";

var palabrasTitulo = tituloOriginal.split(' '); // array con cada palabra
for (var i = 0; i < palabrasTitulo.length; i++) {
    palabrasTitulo[i] = palabrasTitulo[i][0].toUpperCase() + palabrasTitulo[i].substr(1);
}

var tituloCapitalizado = palabrasTitulo.join(' ');
```

Este código, basicamente, divide el texto en un array de palabras y recompone cada una de ellas, pasando a mayúsculas la primera letra y concatenándo ésta con el resto de la palabra (`substr(1)` toma todas menos la primera letra).

Si no supiéramos componer funciones, tendríamos que repetir este código, con ligeras variaciones, cada vez que tuviéramos que capitalizar una cadena de texto. Pero sabiendo funciones, como parametrizarlas y como hacer que devuelvan el resultado de la operación que realizan, podemos hacer algo mucho mejor:

```js
function capitalizar (texto) {
    var palabrasTexto = texto.split(' ');
    for (var i = 0; i < palabrasTexto.length; i++) {
        palabrasTexto[i] = palabrasTexto[i][0].toUpperCase() + 
                           palabrasTexto[i].substr(1);
    }
    return palabrasTexto.join(' ');
}

var titulos = [ "las funciones en javascript son la pera", 
                "las clausuras son la bomba", 
                "para la programación funcional no tengo palabras"];

var Titulo1 = capitalizar(titulos[0]);
var Titulo2 = capitalizar(titulos[1]);
var Titulo3 = capitalizar(titulos[2]);
```


[aside t='important' cb="false"]

**Las funciones sólo pueden devolver un valor.**

[/aside]

Una vez que se ejecuta la sentencia `return`, el programa sale de la función, y aunque haya más sentencias después, estas son ignoradas. Esto implica que aunque incluyas varias sentencias `return` en una función sólo una de ellas va a ser ejecutada. 

Pero si necesitas que una función devuelva más de un valor no todo está perdido. 

[aside t='important' cb="false"]

**Las funciones pueden devolver cualquier tipo de valor.**

[/aside]

Recuerda que tenemos tipos de valores compuestos como los arrays y los objetos. Si necesitas que tu función devuelva más de un valor puedes crear un objeto con todos ellos y devolver el objeto.


[aside t="warning" cb="false" label="Devolver un valor vs. `console.log`"]

¡Ah! Sólo por si acaso. Cabe la posibilidad de que te confundas y llegues a creer que cuando ponemos un `console.log()` dentro de una función estamos devolviendo un valor.

No es así; `console.log()` manda un mensaje a la consola, nada más.

Cuando hablamos de ***devolver un valor*** nos referimos a devolverselo al programa, y de forma que ese valor pueda ser utilizado por el mismo para calcular otro valor, guardarlo en un avariable o cualquiera de las otras cosas que se pueden hacer con los valores.

Una vez más, usar console.log() no tiene nada que ver con devolver un valor.

[/aside]


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


Ahora que ya sabemos utilizar funciones podemos empezar a hablar de conceptos un poco más avanzados que están relacionados con ellas.
Uno de los más importantes es el ámbito en el que una variable o función puede ser utilizada.

Sólo hemos visto una manera de definir funciones. Veremos más, y lo que voy a decir ahora no se aplica necesariamente a las funciones definidas de otra forma.

### Reglas de ámbito para variables. 

**SINTETIZAAAAAAA!!!!!**

Estas reglas nos dicen cuando podemos usar variables que ya hayamos definido. Estas incluyen tanto el acto de obtener el valor de una variable como el de modificarlo. 
Todo el código que hemos escrito hasta ahora ha estado dentro del ámbito de lo que llamamos el objeto global o dentro de una función anidada dentro del objeto global.

Todo programa de javascript es creado dentro de un objeto principal. En el navegador ese objeto se llama `window`, en Node.js se llama `global`.

Este objeto global crea un entorno o ámbito en el que todas las variables y funciones definidas en él son accesibles desde dentro de él. La mejor forma de imaginarlo, creo, es como una burbuja.

Cuando creamos una nueva función, esa función crea su propia burbuja. De forma que cuando tenemos un programa con varias funciones, podemos imaginarlo como una burbuja con varias burbujas más pequeñas dentro. 

Ahora bien, la pared de estas burbujas sólo permite ver hacia afuera. Desde dentro de una burbuja puedes ver las variables y funciones que hay en la burbuja que la contiene, además de las que estén definidas directamente dentro de si misma.

Sin embargo, desde dentro de la burbuja que las contiene a todas, solo puedes ver las variables y las funciones que están definidas dentro de ella. Las variables definidas dentro de esas funciones, son inaccesibles para ti porque la pared de sus burbujas es opaca hacia dentro.

Esto puede parecer extraño al principio, pero en programación es muy importante esconder toda la información posible a cada trozo de programa. Cada bloque de código sólo debería conocer la parte de información que necesita. Esto es importante por temas de seguridad, pero también para facilitar el mantenimiento de los programas, y para evitar errores.

Imagina por un momento un programa con miles de líneas de código y cientos de variables. No es tan raro como imaginas y no tardarás mucho tiempo en trabajar en proyectos de esta embergadura.

Si todas las variables fueran visibles desde cualquier parte del programa, eso significaría pue podríamos modificar su valor desde caulquier parte del código, lo cual probablemente haríamos. Si en una parte del rograma esperamos que una variable tenga un valor concreto, y en otra que se ejecuta después de quien sabe cuantas bifurcaciones condicionales e iteraciones en diferentes bucles lo cambiamos a un valor erroneo, el programa dejaría de funcionar correctamente. Esto significaría que para encontrar el error, tendríamos que leernos el programa entero.

Por eso existen los ámbitos de variable, para compartimentar el programa en zonas lo mas estancas posibles y que nosotros los programadores podamos restringir que partes del programa conocen que variables. Así limitamos le número potencial de errores y también hacemos más facil encontrarlos en caso de que los cometamos (que los cometeremos)

Javacript originalmente soporta los que se denominan reglas de ámbito léxico.
Esto significa que el ámbito en el que una variable es accesible está determinado por el lugar donde la definimos al escribir el programa. Podemos simplificar de momento el esquema diciendo que sólo hay dos tipos de contenedores de ámbito: el objeto global y las funciones y ambos siguen las mismas reglas.

Este es el contexto en el que el simil de las burbujas es válido. Más adelante veremos que hay formas de saltarse estas reglas y existen otro tipo de ámbitos dentro de javascript. Pero nos vamos a mantener dentro de la metáfora de las burbujas hasta que estemos seguros de que lo entendemos bien.

ILUSTRAR CON EJEMPLOS:

* Desde el ábito global podemos acceder sólo a las variables y funciones definidas dentro de él
* Desde dentro de una función (burbuja dentro de la burbuja global) podemos acceder a las variables y funciones definidas dentro de ella misma y a las definidas dentro de cualquiera de las funciones que la contienen.  
    Pero no podemos acceder a las variables que están en una función que está definida en otra función que no la contenga.

Podemos imaginar una jerarquía de ámbitos en forma de árbol cada función es un nodo, un ámbito diferente, que cuelga del de la función dentro del que se ha definido.

Desde un ámbito podemos acceder al ámbito de un nodo padre, o sea podemos por decirlo así ascender por las ramas hasta llegar al tronco principal, pero no podemos saltar a otra rama, no podemos viajar hacia abajo.

Esto impone algunas de las limitaciones de las que antes hablaba a la hora de cometer errores modificando variables que afectan a otras partes del código. Aún así este sistema de ámbitos permite que definamos todas nuestras variables en el ámbito global de forma que sean accesibles a todo el programa.

Esto es algo que debemos evitar a toda costa por las razones expuestas. Soy consciente de que tarde o temprano te encontraras en una situación en la que tendrás la tentación de definir una o más variables como globales, aunque no lo necesiten mas que un par de funciones de tu programa. Por muy incomodo que te parezca en estos casos debes intentar encontrar la forma de pasar esa información a las funciones que la necesitan sin exponerla a todo el programa.

Esto no quiere decir que no debamos declarar variables globales nunca, pero cuantas menos mejor y si las puedes contar con los dedos de una mano mejor aún.

Hay un concepto del que me veo obligado a hablar ahora y que me hubiera gustado poder evitar, porque la visión que os puedo dar con lo que sabéis, suponiendo que no sepáis más que lo que yo os he contado, es muy limitada e algo imprecisa. Pero quiero que pasemos un tiempo practicando y empezando a crear proyectos de más embergadura antes de continuar con la teoría, y si no os cuanto esto ahora tarde o temprano os vais a encontrar con problemas.

Las variables en javascript se comportan de forma un poco extraña dentro de su propio ámbito. Hasta ahora no nos hemos encontrado con este comportamiento porque siempre hemos definido las variables al principio del prorama, antes de usarlas en cualquier expresión. 

---> **Hoisting**
Quizás es mehor hablar de esto en el tema de las variables ???






## 6.- Ejercicios del tema
1. 7 y media
2. Black jack
3. 3 en raya

