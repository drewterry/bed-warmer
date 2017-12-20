var rpio = require('rpio');

//Constants
const CONTROL_DELAY = 250;

function warmerInit(params, mock = false) {
    
    //todo: store control pin number for future use
    
    //Allow for mocking the io for testing purposes
    if(mock){
        rpio.init({mock: 'raspi-zero-w'})
    };
    
    //Initialize the desired control pin for the transistor
    rpio.open(params.controlPin, rpio.OUTPUT);

}

function warmerToggle(params, done) {
    
    //todo: replace params(.pin) with stored pin number
    
    //Toggle the control pin high for CONTROL_DELAY ms
    rpio.write(params.controlPin, rpio.HIGH);
    rpio.msleep(CONTROL_DELAY);
    rpio.write(params.controlPin, rpio.LOW);
    
    done();
}

function warmerClose(params){
    
    //Clear any pin configurations
    rpio.close(params.controlPin, rpio.PIN_RESET);
    
}

module.exports = {
    init: warmerInit,
    toggle: warmerToggle,
    close: warmerClose
}

