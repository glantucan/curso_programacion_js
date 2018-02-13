
* Funciones +
    - [ ] Ambitos anidados. Compilador, gestor de ámbito, motor de ejecución. Objeto global. 'use strict
    - [ ] IIFE
    - [ ] Por valor y por referencia  
    - [ ] Componiendo funciones
    - [ ] Declarar una función dentro de una expresión
    - [ ] Pasando y devolviendo funciones.  
    - [ ] Clausuras  
    - [ ] Funciones puras e impuras



## 3. Funciones puras e impuras

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

La expresión `new Date()` que utiliza el ejemplo es un poco especial y no la hemos visto todavía. Básicamente crea un objeto fecha.

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





