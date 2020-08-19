var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.getsdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setsdSize = function (newsdSize) {
        this.sdSize = newsdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.getis5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setis5G = function (newis5G) {
        this.is5G = newis5G;
    };
    Mobile.prototype.getcameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setcameraNumber = function (newcameraNumber) {
        this.cameraNumber = newcameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.characteristics = function () {
        return "The characteristics of the mobile " + this.name + " are:" + "\n" + "Name: " + this.name + "\n" +
            "Model: " + this.model + "\n" + "Trademark: " + this.trademark + "\n" + "SD Size (GB): " + this.sdSize + "\n" +
            "Color: " + this.color + "\n" + "Is 5g?: " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber;
    };
    return Mobile;
}());
;
var nokia = new Mobile("Nokia", "3210", "Nokia", 1, "Grey", false, 0, 20);
var iphone = new Mobile("iPhone", "3G", "Apple", 5, "Black", false, 1, 50);
var samsung = new Mobile("Samsung", "Galaxy 10", "Samsung", 10, "White", true, 3, 200);
var phones = new Array(nokia, iphone, samsung);
//Pruebas en public
// console.log(nokia); console.log(iphone); console.log(samsung);
// nokia.is5G = true; nokia.cameraNumber = 4;
// console.log(nokia, iphone, samsung);
//Pruebas en private
// console.log(nokia.characteristics());
// nokia.setis5G(true); nokia.setcameraNumber(4);
function todos() {
    for (var i = 0; i < phones.length; i++) {
        console.log(phones[i].characteristics());
    }
}
;
todos();
