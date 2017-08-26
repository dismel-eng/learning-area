export class Bus {
    
    //Number of fuel tanks that a bus has
    private _numTanks: number;
    // Capacity of each tank in liters
    private _tankCapacity: number;
    //Number of sits that a bus has 
    private _sitNum: number;
    //Total amount of fuel that a bus has in liters
    private _fuelAmount: number;

    constructor(numTanks: number, tankCapacity: number, sitNum: number) {
        this._numTanks = numTanks;
        this._tankCapacity = tankCapacity;
        this._sitNum = sitNum;
    }

    //Total Capacity returns the total amount of fuel that a bus has
    TotalCapacity():number{
        let capacity = parseFloat(this._fuelAmount.toString());
        return capacity;
    }

    // Distance = <tankCapacity>*(1/(2n - 1)) (Km) - n = numTanks
    TotalDistance():number{
        let distance = 0;
        let numTanks = this._numTanks;
        let tankCapacity = this._tankCapacity;

        distance = tankCapacity * (1/(2*numTanks - 1));
        return distance;
    }

    // Type of bus: Depens on the number of sits
    BusType():void{
        let busType = 'None';
        let sitNum = this._sitNum;

        if (sitNum !== 0 || sitNum !== undefined) {
            if (sitNum > 10 && sitNum < 20) {
                console.log('MicroBus');                
            } else if(sitNum > 21 && sitNum < 40){
                console.log('Bus');                
            }else if(sitNum > 41 && sitNum < 60){
                console.log('Articulated Bus');                
            }else{
                console.log(busType);                
            }
        } else {
            console.log(busType);            
        }
    }

    // Distance with: Return the distance with 'nliters' parameter, that represent nliters in each tank
    DistanceWith(nliters:number){
        let distance = 0;
        let numTanks = this._numTanks;
        let tankCapacity = nliters;

        distance = tankCapacity * (1/(2*numTanks - 1));
        return distance;
    } 

}