export class CRange {

    private _list: number[];
    private _min: number;
    private _max: number;

    constructor(plist: number[]) {
        this._list = plist;
        if (this._list.length > 0) {
            this._max = this._list[0];
            this._min = this._list[0];
        }
        
    }

    get Min():number{ return this._min; }
    set Min(value: number){ this._min = value;}

    get Max():number{ return this._max;}
    set Max(value: number) { this._max = value;}

    get List():number[]{ return this._list;}
    set List(value:number[]){ this._list = value;}

    setRange(value: number):void{
      
        if (this.findElement(value) === true) {
           
            if (value > this.Max) {
                this.Max = value;
            }
    
            if (value < this.Min) {
                this.Min = value;
            }    
        }else
            console.log('Error: Not in range.');

    }

    findElement(value: number):boolean{
        let count = 0;

        while (count < this.List.length) {
            if (value === this.List[count]) {
                return true;
            }
            count++;
        }
        return false;
    }
}