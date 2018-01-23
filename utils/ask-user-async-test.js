const prompt = require ('./ask-user-async.js');

prompt('¿Cómo te llamas?', recogerNombre);
process.pause();
function recogerNombre(answer) {
  console.log(answer);
}
