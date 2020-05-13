const request = require('request');

const url = 'api.openweathermap.org/data/2.5/weather?q={ankara}&appid={b2418f26f3b3b74e1d3817288d21b8e5}';

request({ url: url}, (err, response) => {
    
    console.log(response);
})