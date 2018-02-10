'use strict';
function aplicarImpuestos(baseImponible) {
    var iva = 21/100;
    var irpf = 18/100;
    return baseImponible * ( 1 + iva - irpf);
}

var totalFactura_1 = aplicarImpuestos(1000);
var totalFactura_2 = aplicarImpuestos(340);
var totalFactura_3 = aplicarImpuestos(2735);

console.log(totalFactura_1); 
console.log(totalFactura_2); 
console.log(totalFactura_3); 