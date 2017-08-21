/** Boar Class */
export class Board {

    private _y: number;
    private _x: number;
    private _boardList: Array<any>;
    constructor() {
        this._x = 8;
        this._y = 8;
        this._boardList = [];        
    }

    get X():number{return this._x;}
    get Y():number{return this._y;}

    get BoardList():Array<any>{
        return this._boardList;
    }

    /** Init board */
    Init():void{

        for (var i = 0; i < this.X; i++) {

            this.BoardList[i] = new Array(8);
            
            for (var j = 0; j < this.Y; j++) {
                this.BoardList[i][j] = ' * ';                
            }

        }
    }

    /** Print Board */
    PirntBoard():void{
        
        for (var i = 0; i < this.X; i++) {
            
            for (var j = 0; j < this.Y; j++) {
                
                if (i % 2 === 0) {
                    this.FillWhiteTile(i,j);
                    
                    if ( j % 2 !== 0) {
                        this.FillBlackTile(i,j);
                    }

                }else{
                    
                    this.FillWhiteTile(i,j);
                    
                    if ( j % 2 === 0) {
                        this.FillBlackTile(i,j);
                    }
                }                    
            }

            console.log(this.BoardList[i].join(''));

        }
    }

    FillWhiteTile(x:number,y:number):void{
        this.BoardList[x][y] = ' 0 ';         
    }

    FillBlackTile(x:number,y:number):void{
        this.BoardList[x][y] = ' 1 ';         
    }
}