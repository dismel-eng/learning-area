'use strict';
/** Describe your bill */
const denomination = {
    one: 1,
    five: 5,
    ten: 10,
    twenty: 20,
    fifty: 50
}

function bill(type, quantity) {

    let _description = parseInt(type) + ' Dollar bill' || ' Dollar bill';
    let _value = parseInt(type);
    let _quantity =  parseInt(quantity);
    
    this.getDescription = function () { return _description; }
    this.getValue = function () { return _value; }
    this.setQuantity = function (value) { _quantity = value; }
    this.getQuantity = function () { return _quantity; }
}

function automatedCashier() {
    let cashier = [];
    
    let init = function () { 
        for (let i in denomination) {
                
             cashier.push(new bill(denomination[i], 10));               

        }
    }

    let isEmpty = function (value) { 
        return (typeof value  !== "undefined" && value);            
    }

    let withdraw = function(value, cashier){
        let cash_back = 0;
        let err = new Error();
        let total = value;
        let n = 0;
        let y = 0;

        try {
            if(total > total(cashier)){
                err.message = 'No funds available.';
                throw  err;
            }

            if(total > (cashier[4].getValue() * cashier[4].getQuantity())){
                //do somethign here;                
            }else{
                n = total / cashier[4].getValue();
                T = total % cashier[4].getValue();

                if(n > cashier[4].getQuantity())
                    console.log('do something here');                    
                else
                    y = cashier[4].getQuantity() - n;
            }

           // if(cashier[4].getValue())
                
        } catch (error) {
            alert(error.message);
        }
        if(!isNaN(parseInt(one)))
            cash_back += cashier[0].get    
    }

    let total = function (cashier) { 
        // Tmp variable that is going to return the total of the cashier

        let tmp = 0;

        for (var key in cashier) {
            tmp += cashier[key].getValue() * cashier[key].getQuantity();  
        }
        
        return tmp;
    }

    init();

    return {
        cashier: cashier,
        total: total,
        withdraw: withdraw
    }

            
}

let app = automatedCashier();

//console.dir(app.total(app.cashier));

///console.dir(app.withdraw());
console.log(230 % 50);

// --