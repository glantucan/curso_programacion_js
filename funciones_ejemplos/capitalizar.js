'use strict';


var tituloOriginal = "las funciones en javascript son la pera";
var palabrasTitulo = tituloOriginal.split(' '); // array con cada palabra
for (var i = 0; i < palabrasTitulo.length; i++) {
    palabrasTitulo[i] = palabrasTitulo[i][0].toUpperCase() + palabrasTitulo[i].substr(1);
}
var tituloCapitalizado = palabrasTitulo.join(' ');

console.log(tituloCapitalizado);