var warmer = require('bed-warmer-io.js');

var warmerParams = {controlPin: 11};

warmer.init(warmerParams);
warmer.toggle(warmerParams, () => {
    console.log('Warmer Toggle Complete');
});
warmer.close(warmerParams);