import * as mrange from "./crange";

class App {
    
    public static main():void{
        let list = [2,3,5,6,7];
        let range = new mrange.CRange(list);

        console.log('List:');
        console.log(range.List);
        range.setRange(5);
        console.log('Max');
        console.log(range.Max);        
        console.log('Min');
        console.log(range.Min);
    }
}

App.main();