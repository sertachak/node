const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Ankara&units=metric&appid=b2418f26f3b3b74e1d3817288d21b8e5';

request({ url: url, json: true }, (err, response) => {
    
    console.log(response);
})