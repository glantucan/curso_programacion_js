'use strict';
var prompt = require ('./ask-user-sync-prompt.js');

// -----------------------------------------------------------------------------------
// Variables de estado
// ***********************************************************************************
var estadoInicial = {
    tablero : [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ],
    jugadores : {
        j1: {
            nombre: '',
            ficha: 'O', 
            movimientos: []
        },
        j2: {
            nombre: '',
            ficha: 'X',
            movimientos: []
        }
    },
    coordenadasTablero: {
        filas: ['A', 'B', 'C'],
        columnas: ['1', '2', '3'], 
    },
    casillasValidas: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'],
    combinacionesGanadoras: [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[2, 0], [1, 1], [2, 0]]
    ],
    jugadorActual: 'j1',
    movimientos: []
};


empezar({j1:'Óscar', j2:'matrix'});

// -----------------------------------------------------------------------------------
// Funciones del juego
// ***********************************************************************************
function empezar(jugadores) {
    var jugadores = jugadores || {};
    var estado = estadoInicial;
    
    estado.jugadores.j1.nombre = jugadores.j1 || preguntar('Nombre del jugador 1: ');
    estado.jugadores.j2.nombre = jugadores.j2 || preguntar('Nombre del jugador 2: ');
    
    
    actualizar(estado);
}

function actualizar(estado) {
    estado = JSON.parse(JSON.stringify(estado));
    limpiarPantalla();
    pintarTablero(estado);
    jugarTurno(estado);
}


function jugarTurno(estado) {
    var jugadorActual = estado.jugadores[estado.jugadorActual];

    var casilla = preguntar('¿Dónde pondrás tu siguiente ficha, ' + jugadorActual.nombre + '? : ').trim().toUpperCase();
    // Validar la casilla introducida
    if (casilla.length !=2 || !estado.casillasValidas.includes(casilla)) {
        mostrar('¡Ese no es un movimiento válido!');
        jugarTurno(estado);
    } else if (estado.jugadores.j1.movimientos.includes(casilla) || estado.jugadores.j2.movimientos.includes(casilla)) {
        mostrar('Esa casilla ya está ocupada, prueba otra : ');
        jugarTurno(estado);
    } 

    var fila = casilla.slice(0, 1);
    var col = casilla.slice(1, 2);
    var idxFila = estado.coordenadasTablero.filas.indexOf(fila);
    var idxCol = estado.coordenadasTablero.columnas.indexOf(col);

    estado.tablero[idxFila][idxCol] = jugadorActual.ficha;
    jugadorActual.movimientos.push(casilla);
    estado.jugadorActual = estado.jugadorActual === 'j1' ? 'j2' : 'j1';

    actualizar(estado);
}

function pintarTablero(estado) {
    var tableroActual = estado.tablero.reduce(anadirFila, '\n ------------');
    mostrar(tableroActual);
}

function anadirFila(tableroParcial, estadoFila) {
    return estadoFila.reduce(anadirCasilla, tableroParcial + '\n|') + '\n ------------';
}

function anadirCasilla(tableroParcial, estadoCasilla) {
    return tableroParcial + ' ' + estadoCasilla + ' ' + '|';
}



// -----------------------------------------------------------------------------------
// Abstracción Interfaz Gráfica
// ***********************************************************************************

function mostrar(mensaje) {
    console.log(mensaje);
}

function preguntar(pregunta) {
    return prompt.ask(pregunta);
}

function limpiarPantalla() {
    prompt.clear();
}