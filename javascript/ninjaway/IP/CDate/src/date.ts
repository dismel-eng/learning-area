export enum Weekdays { Sunday = 1, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
export enum Yearmonths {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

export class CDate {
    private _weekDay: Weekdays;
    private _month: Yearmonths;    
    private _day: number;    
    private _year: number;

    constructor(weekDay: Weekdays, day: number, month: Yearmonths, year: number) {
        this._weekDay = weekDay;
        this._day = day;
        this._month = month;
        this._year = year;
    }

// BEGIN - Getters & Setters -
    get weekDay(): Weekdays{
        return this._weekDay;
    }

   set weekDay(newWeekDay: Weekdays){
        this._weekDay = newWeekDay;
    }
    
    get month(): Yearmonths{
        
        return this._month;
    }
    
    set month(newMonth: Yearmonths){
        this._month = newMonth;
    }

    get day(): number{        
        return this._day;
    }
    
    set day(newDay: number){
        this._day = newDay;
    }

    get year(): number{        
        return this._year;
    }
    
    set year(newYear: number){
        this._year = newYear;
    }

// END - Getters & Setters -

    /** Return a day of a Week ex: 'Monday' */
    getWeekDay(): string {
        return Weekdays[this.weekDay];
    }    

    /** Return a month of a Year ex: 'March' */
    getMonth(): string {
        return Yearmonths[this.month];
    }

    
    IncrementDay(): void {
        
        let currentWeekDay = this.weekDay;
        let currentDay = this.day;
                
        if (this.weekDay === Weekdays.Saturday) {
            this.weekDay = Weekdays.Sunday;             
        } else {
            this.weekDay = ++currentWeekDay;
        }

        if (this.day === 30) {
            this.day = 1;
        } else {
            this.day = ++currentDay;
        }

    }

    DecrementDay(): void {
        
        let currentWeekDay = this.weekDay;
        let currentDay = this.day;
                
        if (this.weekDay === Weekdays.Sunday) {
            this.weekDay = Weekdays.Saturday;             
        } else {
            this.weekDay = --currentWeekDay;
        }

        if (this.day === 1) {
            this.day = 30;
        } else {
            this.day = --currentDay;
        }

    }

    getStandarFormat(): string {
        return this.month +'/'+ this.day +'/'+ this.year;
    }

    getExtendedFormat():string {
        
        let tmpWeekDay = Weekdays[this.weekDay];
        let tmpYearMonth = Yearmonths[this.month];

        return tmpWeekDay+', '+ this.day +' of '+ tmpYearMonth +' '+ this.year;

    }

    /** Return a date in a given format:
     *  standar: mm/dd/yyy
     *  extended: weekday, dth mmmm yyyy (Monday, 3 of August 2006)
     */
    getDate(format = ''): string {
        let date;

        if (typeof format === 'string' && format !== '') {

            switch (format) {
                case 'standar':
                    date = this.getStandarFormat();
                    break;
                case 'extended':
                    date = this.getExtendedFormat();
                    break;
                default:
                    date = this.getStandarFormat();
                    break;
            }
        }else
            date = this.getStandarFormat();
        
        return date;
    }


}