"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var triangulo_1 = require("./triangulo");
var punto1 = new punto_1.Punto(3, 5);
var punto2 = new punto_1.Punto(-7, -22);
var punto3 = new punto_1.Punto(-11, 0);
var punto4 = new punto_1.Punto(2, 19);
var puntos = new Array(punto1, punto2, punto3);
var triangulo1 = new triangulo_1.Triangulo(punto1, punto2, punto3);
console.log(punto1.toString());
punto1.setX(14);
console.log(punto1.getX());
console.log(punto1.distanciaAlOrigen());
console.log(punto2.calcularCuadrante());
console.log(punto3.calcularCuadrante());
console.log(punto4.calcularMasCercano(puntos));
console.log(triangulo1.calcularLongitudLados());
//Funcion con el número más bajo de un array
// function masBajo (arrayN:number[])
// {
//     let bajo = arrayN[0];
//     for (let i = 0; i < arrayN.length; i++) {
//         if (arrayN[i] < bajo) {
//             bajo = arrayN[i]
//         }
//     }
//     return bajo;
// }
// let ejemplo :number[] = new Array (3,1,90,1,7)
// console.log(masBajo(ejemplo));
