import * as mdate from "./cnumber";

class App {
    
    public static main():void{
        let mnumber = new mdate.CNumber(8);
        
        console.log(mnumber.Factorial());
        
    }
}

App.main();