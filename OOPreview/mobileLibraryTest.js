"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileLibrary_1 = require("./mobileLibrary");
var nokia = new mobile_1.Mobile("Nokia", "3210", "Nokia", 1, "Grey", false, 0, 20);
var iphone = new mobile_1.Mobile("iPhone", "3G", "Apple", 5, "Black", false, 1, 50);
var samsung = new mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", 10, "White", true, 3, 200);
var faire = new mobile_1.Mobile("Fairephone", "4", "Fairphone", 20, "Gold", true, 2, 102);
var phones = new Array(nokia, iphone, samsung, faire);
var shop = new mobileLibrary_1.MobileLibrary("Limon", "Someland", phones);
/* Pruebas en public
console.log(nokia); console.log(iphone); console.log(samsung);
nokia.is5G = true; nokia.cameraNumber = 4;
console.log(nokia, iphone, samsung);
*/
// Pruebas en private
// console.log(nokia.characteristics());
// nokia.setis5G(true); nokia.setcameraNumber(4);
// for ( let i = 0; i < phones.length; i++) {
//         console.log(phones[i].characteristics())
//     }
//Library Test
// console.log(shop.getName());
// shop.setLocation("Tomorrowland");
// console.log(shop.getLocation());
// console.log(shop.getMobiles());
// console.log(shop.getPrice());
console.log(shop.printLibrary());
