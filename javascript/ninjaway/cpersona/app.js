'use strict';
const SEX = {
    female: 'F',
    male: 'M'
}
/** Person Constructor: name, age, height, sex */
function Person(name, age, height, sex) {
  let _name = name;
  let _age = age;
  let _height = height;
  let _sex = sex;
  
  /** Get and Set Methods */
  this.getName = function () { return _name; }
  this.setName = function (value) { _name = value; }

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
}

let dismel = new Person('Dismel', 32, 170, SEX.male);

console.dir(dismel);
// Build the interfaces