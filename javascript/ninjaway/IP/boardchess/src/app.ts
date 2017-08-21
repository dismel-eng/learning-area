import * as mboard from './board'
class App {
   
    public static main():void{
        let board = new mboard.Board();
        
        board.Init();
        board.PirntBoard();
    }  
}

App.main();
