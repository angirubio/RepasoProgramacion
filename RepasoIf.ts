//1. Signo zodiacal dada fecha de nac.

function zodiaco(dia:number, mes:number) {

    if ( (mes == 1 && dia <= 20) || (mes == 12 && dia <=22) ) {
        return "Capricornio";
    } else if ( (mes == 1 && dia >= 21) || (mes == 2 && dia <=18) ) {
        return "Acuario"
    } else if ( (mes == 2 && dia >= 19) || (mes == 3 && dia <=20) ) {
        return "Piscis"
    } else if ( (mes == 3 && dia >= 21) || (mes == 4 && dia <=20) ) {
        return "Aries"
    } else if ( (mes == 4 && dia >= 21) || (mes == 5 && dia <=20) ) {
        return "Tauro"
    } else if ( (mes == 5 && dia >= 21) || (mes == 6 && dia <=21) ) {
        return "Géminis"
    } else if ( (mes == 6 && dia >= 22) || (mes == 7 && dia <=22) ) {
        return "Cáncer"
    } else if ( (mes == 7 && dia >= 23) || (mes == 8 && dia <=22) ) {
        return "Leo"
    } else if ( (mes == 8 && dia >= 23) || (mes == 9 && dia <=22) ) {
        return "Virgo"
    } else if ( (mes == 9 && dia >= 23) || (mes == 10 && dia <=22) ) {
        return "Libra"
    } else if ( (mes == 10 && dia >= 23) || (mes == 11 && dia <=22) ) {
        return "Escorpio"
    } else if ( (mes == 11 && dia >= 23) || (mes == 12 && dia <=21) ) {
        return "Sagitario"
    }
};

console.log(zodiaco(12,7));

//2. Continente por país

function continente(pais:string) {
    if ( (pais == "España") || (pais == "Francia") || (pais == "Italia") || (pais == "Grecia") || (pais == "Alemania") ) {
        console.log("Europa");
    } else if ( (pais == "Vietnam") || (pais == "India") || (pais == "China") || (pais == "Japón") || (pais == "Filipinas") ) {
        console.log("Asia");
    } else if ( (pais == "Marruecos") || (pais == "Túnez") || (pais == "Senegal") || (pais == "Guinea") || (pais == "Chad") ) {
        console.log("África");
    } else if ( (pais == "Argentina") || (pais == "Brasil") || (pais == "México") || (pais == "Cánada") || (pais == "Estados Unidos") ) {
        console.log("América");
    } else if ( (pais == "Nueva Zelanda") || (pais == "Australia") || (pais == "Papúa Nueva Guinea") || (pais == "Fiyi") || (pais == "Islas Marshall") ) {
        console.log("Oceanía");
    }
}

continente("Papúa Nueva Guinea");