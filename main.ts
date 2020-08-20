import { Punto } from "./punto"
import { Triangulo } from "./triangulo"

let punto1 :Punto = new Punto (3,5);
let punto2 :Punto = new Punto (-7,-22);
let punto3 :Punto = new Punto (-11,0);
let punto4 :Punto = new Punto (2,19);
let puntos :Punto[] = new Array (punto1, punto2, punto3);
let triangulo1 :Triangulo = new Triangulo (punto1,punto2,punto3);

console.log(punto1.toString());
punto1.setX(14);
console.log(punto1.getX());
console.log(punto1.distanciaAlOrigen());
console.log(punto2.calcularCuadrante());
console.log(punto3.calcularCuadrante());
console.log(punto4.calcularMasCercano(puntos));
console.log(triangulo1.calcularLongitudLados());

//Funcion con el número más bajo de un array

function masBajo (arrayN:number[])
{
    let bajo = arrayN[0];
    for (let i = 0; i < arrayN.length; i++) {
        if (arrayN[i] < bajo) {
            bajo = arrayN[i]
        }
    }
    return bajo;
}

let ejemplo :number[] = new Array (3,1,90,1,7)
console.log(masBajo(ejemplo));