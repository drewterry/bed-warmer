var warmer = require('./bed-warmer-io.js');

var warmerParams = {controlPin: 11};

warmer.init(warmerParams);

/*
//Toggle Bed Warmer 10 times

setTimeout(() => {
    clearInterval(i);
    console.log('End');
}, 10000);

var i = setInterval(

*/
    warmer.toggle(warmerParams, () => {
            console.log('Warmer Toggle Complete');
        })
    /*, 1000) */;

warmer.close(warmerParams);