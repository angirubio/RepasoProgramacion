"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt((Math.pow((0 - this.x), 2)) + (Math.pow((0 - this.y), 2)));
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        return Math.sqrt((Math.pow((otroPunto.x - this.x), 2)) + (Math.pow((otroPunto.y - this.y), 2)));
    };
    Punto.prototype.calcularCuadrante = function () {
        if ((this.x == 0) || (this.y == 0)) {
            return 0;
        }
        else if ((this.x > 0) && (this.y > 0)) {
            return 1;
        }
        else if ((this.x < 0) && (this.y > 0)) {
            return 2;
        }
        else if ((this.x < 0) && (this.y < 0)) {
            return 3;
        }
        else if ((this.x > 0) && (this.y < 0)) {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var cercano = new Punto(0, 0);
        var distanciaCercano = 1000;
        for (var i = 0; i < puntos.length; i++) {
            var distanciaPunto = this.calcularDistancia(puntos[i]);
            if (distanciaPunto < distanciaCercano) {
                distanciaCercano = distanciaPunto;
                cercano = puntos[i];
            }
        }
        return cercano;
    };
    return Punto;
}());
exports.Punto = Punto;
;
