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