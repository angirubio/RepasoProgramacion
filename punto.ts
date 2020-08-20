export class Punto
{
    private x:number
    private y:number

    constructor (x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }

    public toString():string
    {
        return "(" + this.x + "," + this.y + ")"
    }

    public getX():number
    {
        return this.x
    }
    public setX(newX)
    {
        this.x = newX;
    }

    public getY():number
    {
        return this.y
    }
    public setY(newY)
    {
        this.y = newY;
    }

    public distanciaAlOrigen():number
    {
        return Math.sqrt( ( Math.pow( ( 0 - this.x), 2 ) ) + ( Math.pow( ( 0 - this.y), 2 ) ) );
    }

    public calcularDistancia(otroPunto :Punto):number
    {
        return Math.sqrt( ( Math.pow( ( otroPunto.x - this.x), 2 ) ) + ( Math.pow( ( otroPunto.y - this.y), 2 ) ) );
    }

    public calcularCuadrante():number
    {
        if ( (this.x == 0) || (this.y == 0))
        {
            return 0;
        } else if ( (this.x > 0) && (this.y > 0) ){
            return 1;
        } else if ( (this.x < 0) && (this.y > 0) ) {
            return 2;
        } else if ( (this.x < 0) && (this.y < 0) ) {
            return 3;
        } else if ( (this.x > 0) && (this.y < 0) ) {
            return 4;
        }
    }

    public calcularMasCercano(puntos :Punto[]) :Punto
    {
        let cercano :Punto = new Punto (0,0);
        let distanciaCercano :number = 1000;
        for (let i = 0; i < puntos.length; i++) {
            let distanciaPunto = this.calcularDistancia(puntos[i])
            if ( distanciaPunto < distanciaCercano) {
                distanciaCercano = distanciaPunto
                cercano = puntos[i]
            }
        }
        return cercano;
    }

};