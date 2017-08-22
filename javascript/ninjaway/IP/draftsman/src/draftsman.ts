export class Draftsman {
    
    private _dimension: number;

    constructor(dimension: number) {
        this._dimension = dimension;
    }

    get Dimension():number{ return this._dimension; }
    set Dimension(value: number) { this._dimension = value; }

    HollowSquare():void{
        let start = ' * ';
        let space = '   ';
        let row = '';

        for (var i = 0; i < this.Dimension; i++) {
            let row = '';
            
            for (var j = 0; j < this.Dimension; j++) {
                
                if (i === 0 || i === this.Dimension - 1) {
                    
                     row += start;
 
                }else{
                    if (j === 0 || j === this.Dimension - 1) {
                        row += start;
                    } else {
                        row += space;
                    }
                }

            }

            console.log(row);
        }
    }

    BotLeftTriangle():void{
        let start = ' * ';
        let row = '';
        let count = 0;

        while(count < this.Dimension){
            row += start;
            console.log(row);
            count++;            
        }
        
    }

    TopLeftTriangle():void{
        let start = ' * ';
        let row = '';
        let count = this.Dimension;

        while(count > 0){
            row = '';
            let tmp = count;
            
            while (tmp > 0) {
                row += start;
                tmp--;
            }
            console.log(row);
            
            count--;            
        }
        
    }

    BotRigthTriangle():void{
        let start = ' * ';
        let space = '   ';
        let row = '';

        for (var i = this.Dimension; i > 0; i--) {
            row = '';
            for (var j = 0; j <= this.Dimension ; j++) {
                row += (j  < i) ? space : start;
            }            
            console.log(row);                        
        }
    }

    TopRigthTriangle():void{
        let start = ' * ';
        let space = '   ';
        let row = '';
        
        for (var i = this.Dimension; i > 0; i--) {
            row = '';
            var n = this.Dimension;

            for (var j = 0; j <= n; j++) {
                   row += ( j <= (n - i)) ? space : start;            
            }
            console.log(row);
            
        }
    }

    ZigZag():void{
        let start = ' * ';
        let space = '   ';
        let row = '';

        for (var i = 1; i <= this.Dimension; i++) {
            row = '';
            for (var j = 0; j < this.Dimension; j++) {
                 if (i % 2 !== 0) {
                     row += (j === this.Dimension - 1) ? space : start;
                 } else {
                    row += (j === 0) ? space : start;
                 }               
            }
            console.log(row);
        }
    }

    Triangle():void{
       console.log('falta');
       
    }
    
}
