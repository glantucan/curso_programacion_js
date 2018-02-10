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