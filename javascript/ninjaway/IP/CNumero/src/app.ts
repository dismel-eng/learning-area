import * as mnumber from "./cnumber";

class App {
    
    public static main():void{
        let m_number = new mnumber.CNumber(5);
        
        console.log(m_number.Serie());
        
    }
}

App.main();