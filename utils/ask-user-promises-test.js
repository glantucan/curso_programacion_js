const prompt = require ('./ask-user-promises.js');

//const nombre = prompt('¿Cómo te llamas?');
var nombre;
prompt( ['¿Cómo te llamas?', '¿Cual es tu apellido?'] )
  .then( function (answerIterator) {
    
    nombre = answerIterator[0];
    apellido= answerIterator[1];
    console.log('\nNombre: ' + nombre + ' ' + apellido);

});



