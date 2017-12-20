var warmer = require('./bed-warmer-io.js');
var express = require('express');

app = express();
var warmerParams = {controlPin: 11};

app.get('/toggle', (req, res) => {
    warmer.toggle(warmerParams, () => {
        res.send('Warmer Toggle Complete');
    });
});

warmer.init(warmerParams);
console.log('Control Pin initialized.');

app.listen(42713, () => console.log('Bed Warmer listening on 42713.'));

//warmer.close(warmerParams);
//console.log('Control Pin released.');