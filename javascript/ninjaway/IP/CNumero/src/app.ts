import * as mdate from "./cnumber";

class App {
    
    public static main():void{
        let mnumber = new mdate.CNumber(673);
        
        console.log(mnumber.IsPrime());
        
    }
}

App.main();