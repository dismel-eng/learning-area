'use strict';
const tile = function(location){
    this.location = location || 0;    
}
function hydroponicfarm(){
    
    let _enviromental_temperature;
    let _sensorList = [];


    /** This function returns the env temp. */ 
    this.getEnvTemp = function() { return _enviromental_temperature; }
    
    /** This set the initial hydroponic Fram.
     *  1. Set a number of sensor an place them in a location.
    */
    this.init = function(){

    }
    
}



