//4. Devolver array invertido
function invertir(array) {
    var i = array.length;
    var invertido = [];
    while (i) {
        i--;
        invertido.push(array[i]);
    }
    return invertido;
}
;
var array1 = ["Rojo", "Verde", "Amarillo", "Azul"];
// console.log(invertir(array1));
//6. Si hay  un par en el array
function hayPar(n) {
    var i = 0;
    var par = false;
    while (i < n.length && (par == false)) {
        if (n[i] % 2 == 0) {
            par = true;
            console.log("Hay un número par");
        }
        i++;
    }
}
;
var escalera = [347, 365, 1501, 2019, 7, 64, 81, 700];
var escalera2 = [347, 365, 1501, 2019, 7, 63, 81, 707];
// hayPar(escalera);
// hayPar(escalera2);
//7. Verdadero si todos los nombres del array empiezan por M
function namesM(names) {
    var i = 0;
    var m = true;
    while ((i < names.length) && (m == true)) {
        if (names[i][0] == "M") {
            m = true;
            console.log(i);
        }
        else {
            m = false;
            console.log(i);
        }
        i++;
    }
    return m;
}
;
var groupA = ["Michael", "Matthew", "Mark", "Morgan", "Mason", "Moses", "Martin"];
var groupB = ["Micah", "Levis", "Jordan", "Judah", "Miles"];
console.log(namesM(groupA));
console.log(namesM(groupB));
