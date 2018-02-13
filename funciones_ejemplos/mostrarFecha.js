'use strict';
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



function obtenerHoraActual() {
    var fecha = new Date();
    var horas = fecha.getHours();
    if (horas < 10) {
        horas = "0" + horas;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    var segundos = fecha.getSeconds();
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    return horas + ":" + minutos + ":" + segundos;
}

console.log( obtenerHoraActual() );