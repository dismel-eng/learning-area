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
        let start = ' * ';
        let space = '   ';
        let row = '';
        let mid = Math.ceil(this.Dimension / 2);
        

        

        for (var i = 1; i <= this.Dimension; i++) {
            if(i % 2 === 0)
                continue;
            row = '';
            for (var j = 1; j <= this.Dimension; j++) {
                
                if(i === this.Dimension){
                    // Print i, j, dimension
                    //console.log('i: '+`${i}`+' - '+' j: '+`${j}`+' - '+' type: '+`${start}`);
                    row += start;
                    
                }else{
                    
                    let x = Math.floor((this.Dimension - i) / 2);
                    let y = this.Dimension - Math.floor(x) + 1;

                    if (i === 1) {
                        row += (j === mid ) ? start : space;                            
                    }else if(j > x && j < y){
                        row += start;
                    }else
                        row += space;                                               
                }                   
                                
            }
            console.log(row);                          
        }       
    }

    Diamond():void{
        let start = ' * ';
        let space = '   ';
        let row = '';
        let mid = Math.ceil(this.Dimension / 2);
        let x = 1;
        let y = 1;

        for (var i = 1; i <= this.Dimension; i++) {
            row = '';
                        
            for (var j = 1; j <= this.Dimension; j++) {
                
                let x = (i < mid) ? mid - i : i - mid;
                let y = (i < mid) ? mid + (i - 1) : this.Dimension - (i - mid);              
               
                if (i === 1 || i === this.Dimension) {
                    row += (j === mid ) ? start : space;                            
                }else if(i === mid){
                    row += start;
                }else if(j > x && j <= y){
                    row += start;
                }else
                    row += space;                              
            }
            
            console.log(row);
            
        }
        
    }
    
}
