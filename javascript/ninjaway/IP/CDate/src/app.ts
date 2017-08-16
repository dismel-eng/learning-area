import * as mdate from "./date";

class App {
    
    /**
     * static main
     */
    public static main(): void {
        
        let weekday = mdate.Weekdays.Thursday;
        let month = mdate.Yearmonths.November;

        let date = new mdate.CDate(weekday, 14, month, 1985);
        
        date.IncrementDay();
        console.log(date.getDate('extended'));        
    }
}

App.main();