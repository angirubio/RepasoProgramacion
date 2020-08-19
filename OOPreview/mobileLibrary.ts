import { Mobile } from "./mobile"

export class MobileLibrary
{
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor (name:string, location:string, mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    private totalPriceCalculation():number
    {
        this.totalPrice = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getPrice()
        }
        return this.totalPrice
    }

    public getName():string
    {
        return this.name
    }
    public setName(newName)
    {
        this.name = newName;
    }

    public getLocation():string
    {
        return this.location
    }
    public setLocation(newLocation)
    {
        this.location = newLocation;
    }

    public getMobiles():Mobile[]
    {
        return this.mobiles
    }
    public setLMobiles(newMobiles)
    {
        this.mobiles = newMobiles;
    }

    public getPrice():number
    {
        return this.totalPriceCalculation()
    }
    public setPrice(newPrice)
    {
        this.totalPriceCalculation = newPrice;
    }
    public printLibrary():string
    {
        let info :string = "";
        for ( let i = 0; i < this.mobiles.length; i++)
        {
            info += this.mobiles[i].characteristics() + "\n" + "\n"
        }
        return "This is all my mobiles: " + "\n" + "\n" + info + "Price overall: " + this.totalPriceCalculation()
    }
};