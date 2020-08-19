"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.totalPriceCalculation = function () {
        this.totalPrice = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    };
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (newName) {
        this.name = newName;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (newLocation) {
        this.location = newLocation;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setLMobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileLibrary.prototype.getPrice = function () {
        return this.totalPriceCalculation();
    };
    MobileLibrary.prototype.setPrice = function (newPrice) {
        this.totalPriceCalculation = newPrice;
    };
    MobileLibrary.prototype.printLibrary = function () {
        var info = "";
        for (var i = 0; i < this.mobiles.length; i++) {
            info += this.mobiles[i].characteristics() + "\n" + "\n";
        }
        return "This is all my mobiles: " + "\n" + "\n" + info + "Price overall: " + this.totalPriceCalculation();
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
;
