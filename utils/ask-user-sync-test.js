var prompt = require ('./ask-user-sync-prompt.js')();

var answer = prompt('¿Cómo te llamas?: ');

console.log('\n\n' + answer);

console.log('\n\n\n');
var answer = prompt('Pulsa enter para limpiar la pantalla: ');

console.log('\033[2J');

var answer = prompt('¿Cuantos años tienes?: ');

console.log('\n\n' + answer);
