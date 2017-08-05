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
    let bills = [];

    return {
        init: function () {
        
            for (let i in denomination) {
                
                bills.push(new bill(denomination[i], 10));               

            }

        },
        total: function () {
            let tmp;

            bills.forEach((item, index) => {
                tmp += item.value * item.quantity;
            });

            return tmp;
        }
    }
    
}

let app = automatedCashier();
app.init();
console.dir(app.total());