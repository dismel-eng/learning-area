import * as draftsman from './draftsman'

class App {
    
    public static main():void{
        let m_draftsman = new draftsman.Draftsman(21);
       
        m_draftsman.Diamond();           
    }

}

App.main();