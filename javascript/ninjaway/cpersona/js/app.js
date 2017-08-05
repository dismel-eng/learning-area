'use strict';
const SEX = {
    female: 'F',
    male: 'M'
}
/** Person Constructor: name, age, height, sex */
function Person(firt_name, last_name, age, height, sex) {
  let _firt_name = firt_name || 'Menda';
  let _last_name = last_name || 'Capote';
  let _age = age || 45;
  let _height = height || 175;
  let _sex = sex || SEX.male;
  
  /** Get and Set Methods */
  this.getFirstName = function () { return _firt_name; }
  this.setFirstName = function (value) { _firt_name = value; }

  this.getLastName = function () { return _last_name; }
  this.setLastName = function (value) { _last_name = value; }

  this.getAge = function () { return _age; }
  this.setAge = function (value) { _age = value; }

  this.getHeight = function () { return _height; }
  this.setHeight = function (value) { _height = value; }

  this.getSex = function () { return _sex; }
  this.setSex = function (value) { _sex = value }

  /** Ask for the current Year to return the birth Year */
  this.birthYear = function (currentYear) { 
    
        if(currentYear === undefined){
            
            return "you need to provide a year as a current year.";

        }else{

            return currentYear - this.getAge();

        }

   }

   /** We are using a metric system so we asume that the height
    *  is in meters. In the constuctor we provided the height
    *  in cm;
    */

    /** Retur the height of the Person in Inch. */
    this.inchHeight = function () { 
        
        let currentHeight = this.getHeight();
        
        let inches = function (centimeters) { 
            return centimeters * 1 / 2.54;
        }

        return inches(currentHeight);       
    }
    
    /**
     * ideal_weight: Ideal weight expressed in Kg
     * person_height: Person's height expressed in cm 
     * person_age: Person's age
     * 
     * Formula: ideal_weight = (person_height - 100) + person_age / 100 
     */

    /** Ideal weight */
    this.idealWeight = function () { 
        let person_height = this.getHeight();
        let person_age = this.getAge();

        let ideal_weight = (person_height - 100) + person_age / 100;

        return Math.floor(ideal_weight) + ' Kg';
    }

    /** Retur Full Name */
    this.fullName = function () { 

        return this.getFirstName() + ' ' + this.getLastName();
    }
}