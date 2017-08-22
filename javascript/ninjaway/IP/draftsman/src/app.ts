import * as draftsman from './draftsman'

class App {
    
    public static main():void{
        let m_draftsman = new draftsman.Draftsman(5);
       
        m_draftsman.ZigZag();           
    }

}

App.main();