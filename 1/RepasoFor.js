//3. Mostrar impares hasta parámetro
function impar(numero) {
    for (var i = 1; i < numero; i += 2) {
        console.log(i);
    }
}
;
//impar(20);
//5. Colores array arco iris
function arcoiris(colores) {
    for (var i = 0; i < colores.length; i++) {
        if ((colores[i] == "Rojo") || (colores[i] == "Naranja") || (colores[i] == "Amarillo") || (colores[i] == "Verde") || (colores[i] == "Cian") || (colores[i] == "Azul") || (colores[i] == "Violeta")) {
            console.log(colores[i] + ": Está en el arcoiris.");
        }
        else {
            console.log(colores[i] + ": No está en el arcoiris.");
        }
    }
}
;
var escala = ["Violeta", "Negro", "Gris", "Amarillo"];
//arcoiris(escala);
//Suma de caracteres de array
function sumaarray(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i].length;
    }
    return suma;
}
;
var asumar = ["Violeta", "Negro", "Gris", "Amarillo"];
//console.log(sumaarray(asumar));
//Imprimir si parámetro par o impar
function parImpar(n) {
    for (var i = 0; i < n; i++) {
        var paridad = false;
        if (n % 2 == 0) {
            paridad = true;
            console.log("Par");
        }
        else {
            paridad = false;
            console.log("Impar");
        }
        return paridad;
    }
    ;
}
//parImpar(2);
//parImpar(5);
//Par o impar suma de caracteres de arrays
var c = ["Casa", "Coche", "Ciudad", "Cesta"];
var b = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var v = ["Venezuela", "Veneno", "Voltaje"];
parImpar(sumaarray(c));
parImpar(sumaarray(b));
parImpar(sumaarray(v));
