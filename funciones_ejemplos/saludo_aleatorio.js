'use strict';

function saludoAleatorio() {
    var saludos = [
        '¡Hola!', 
        '¡Buenos días!',
        '¡Hola! ¿Qué tal?',
        '¡Ey! ¡Cuanto tiempo!'
    ];
    var indAleatorio = Math.floor( Math.random() * saludos.length );
    console.log(saludos[indAleatorio]);
}

saludoAleatorio();
saludoAleatorio();