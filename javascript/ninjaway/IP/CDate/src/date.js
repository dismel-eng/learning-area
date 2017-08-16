"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Sunday"] = 1] = "Sunday";
    Weekdays[Weekdays["Monday"] = 2] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 3] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 4] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 5] = "Thursday";
    Weekdays[Weekdays["Friday"] = 6] = "Friday";
    Weekdays[Weekdays["Saturday"] = 7] = "Saturday";
})(Weekdays = exports.Weekdays || (exports.Weekdays = {}));
;
var Yearmonths;
(function (Yearmonths) {
    Yearmonths[Yearmonths["January"] = 1] = "January";
    Yearmonths[Yearmonths["February"] = 2] = "February";
    Yearmonths[Yearmonths["March"] = 3] = "March";
    Yearmonths[Yearmonths["April"] = 4] = "April";
    Yearmonths[Yearmonths["May"] = 5] = "May";
    Yearmonths[Yearmonths["June"] = 6] = "June";
    Yearmonths[Yearmonths["July"] = 7] = "July";
    Yearmonths[Yearmonths["August"] = 8] = "August";
    Yearmonths[Yearmonths["September"] = 9] = "September";
    Yearmonths[Yearmonths["October"] = 10] = "October";
    Yearmonths[Yearmonths["November"] = 11] = "November";
    Yearmonths[Yearmonths["December"] = 12] = "December";
})(Yearmonths = exports.Yearmonths || (exports.Yearmonths = {}));
var CDate = (function () {
    function CDate(weekDay, day, month, year) {
        this._weekDay = weekDay;
        this._day = day;
        this._month = month;
        this._year = year;
    }
    Object.defineProperty(CDate.prototype, "weekDay", {
        // BEGIN - Getters & Setters -
        get: function () {
            return this._weekDay;
        },
        set: function (newWeekDay) {
            this._weekDay = newWeekDay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CDate.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (newMonth) {
            this._month = newMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (newDay) {
            this._day = newDay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (newYear) {
            this._year = newYear;
        },
        enumerable: true,
        configurable: true
    });
    // END - Getters & Setters -
    CDate.prototype.getWeekDay = function () {
        return Weekdays[this.weekDay];
    };
    CDate.prototype.getMonth = function () {
        return Yearmonths[this.month];
    };
    CDate.prototype.IncrementDay = function () {
        var currentWeekDay = this.weekDay;
        var currentDay = this.day;
        if (this.weekDay === Weekdays.Saturday) {
            this.weekDay = Weekdays.Sunday;
        }
        else {
            this.weekDay = ++currentWeekDay;
        }
        if (this.day === 30) {
            this.day = 1;
        }
        else {
            this.day = ++currentDay;
        }
    };
    CDate.prototype.DecrementDay = function () {
        var currentWeekDay = this.weekDay;
        var currentDay = this.day;
        if (this.weekDay === Weekdays.Sunday) {
            this.weekDay = Weekdays.Saturday;
        }
        else {
            this.weekDay = --currentWeekDay;
        }
        if (this.day === 1) {
            this.day = 30;
        }
        else {
            this.day = --currentDay;
        }
    };
    CDate.prototype.getStandarFormat = function () {
        return this.month + '/' + this.day + '/' + this.year;
    };
    CDate.prototype.getExtendedFormat = function () {
        var tmpWeekDay = Weekdays[this.weekDay];
        var tmpYearMonth = Yearmonths[this.month];
        return tmpWeekDay + ', ' + this.day + ' of ' + tmpYearMonth + ' ' + this.year;
    };
    /** Return a date in a given format:
     *  standar: mm/dd/yyy
     *  extended: weekday, dth mmmm yyyy (Monday, 3 of August 2006)
     */
    CDate.prototype.getDate = function (format) {
        if (format === void 0) { format = ''; }
        var date;
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
        }
        else
            date = this.getStandarFormat();
        return date;
    };
    return CDate;
}());
exports.CDate = CDate;
//# sourceMappingURL=date.js.map