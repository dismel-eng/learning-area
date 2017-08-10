'use strict';

function TemperatureSenson (currentlocation){
    let _location = 0;

    this.setLocation = function(currentlocation){
        _location = currentlocation;
    }

    this.getLocation = function(){  return _location; }
}

TemperatureSenson.prototype.calibrate = function(value){
    _temperature = value || 0;
}

TemperatureSenson.prototype.getCurrentTemperature = function(){
    
    return _temperature;
}