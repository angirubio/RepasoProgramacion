class Mobile
{
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor (name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    public getName():string
    {
        return this.name
    }
    public setName(newName)
    {
        this.name = newName;
    }

    public getModel():string
    {
        return this.model
    }
    public setModel(newModel)
    {
        this.model = newModel;
    }

    public getTrademark():string
    {
        return this.trademark
    }
    public setTrademark(newTrademark)
    {
        this.trademark = newTrademark;
    }

    public getsdSize():number
    {
        return this.sdSize
    }
    public setsdSize(newsdSize)
    {
        this.sdSize = newsdSize;
    }

    public getColor():string
    {
        return this.color
    }
    public setColor(newColor)
    {
        this.color = newColor;
    }

    public getis5G():boolean
    {
        return this.is5G
    }
    public setis5G(newis5G)
    {
        this.is5G = newis5G;
    }

    public getcameraNumber():number
    {
        return this.cameraNumber
    }
    public setcameraNumber(newcameraNumber)
    {
        this.cameraNumber = newcameraNumber;
    }

    public getPrice():number
    {
        return this.price
    }
    public setPrice(newPrice)
    {
        this.price = newPrice;
    }

    public characteristics():string
    {
        return "The characteristics of the mobile " + this.name + " are:" + "\n" + "Name: " + this.name + "\n" +
        "Model: " + this.model + "\n" + "Trademark: " + this.trademark + "\n" + "SD Size (GB): " + this.sdSize + "\n" +
        "Color: " + this.color + "\n" + "Is 5g?: " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber
    }
};

let nokia:Mobile = new Mobile ("Nokia", "3210", "Nokia", 1, "Grey", false, 0, 20);
let iphone:Mobile = new Mobile ("iPhone", "3G", "Apple", 5, "Black", false, 1, 50);
let samsung:Mobile = new Mobile ("Samsung", "Galaxy 10", "Samsung", 10, "White", true, 3, 200);
let phones:Mobile[] = new Array (nokia, iphone, samsung);

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