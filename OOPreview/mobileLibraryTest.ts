import { Mobile } from "./mobile"
import { MobileLibrary } from "./mobileLibrary"


let nokia:Mobile = new Mobile ("Nokia", "3210", "Nokia", 1, "Grey", false, 0, 20);
let iphone:Mobile = new Mobile ("iPhone", "3G", "Apple", 5, "Black", false, 1, 50);
let samsung:Mobile = new Mobile ("Samsung", "Galaxy 10", "Samsung", 10, "White", true, 3, 200);
let faire:Mobile = new Mobile ("Fairephone", "4", "Fairphone", 20, "Gold", true, 2, 102);

let phones:Mobile[] = new Array (nokia, iphone, samsung, faire);
let shop:MobileLibrary = new MobileLibrary ("Limon", "Someland", phones);
/* Pruebas en public
console.log(nokia); console.log(iphone); console.log(samsung);
nokia.is5G = true; nokia.cameraNumber = 4;
console.log(nokia, iphone, samsung);
*/

// Pruebas en private
console.log(nokia.characteristics());
nokia.setis5G(true); nokia.setcameraNumber(4);
for ( let i = 0; i < phones.length; i++) {
        console.log(phones[i].characteristics())
    }

//Library Test
console.log(shop.getName());
shop.setLocation("Tomorrowland");
console.log(shop.getLocation());
console.log(shop.getMobiles());
console.log(shop.getPrice());
console.log(shop.printLibrary());
