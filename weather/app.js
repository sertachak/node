const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Ankara&units=metric&appid=b2418f26f3b3b74e1d3817288d21b8e5';

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Ankara.json?access_token=pk.eyJ1Ijoic2VydGFjaGFrIiwiYSI6ImNrYmY5bXhsczB0ZTgzMG5vc2NlNGpnanQifQ.fctWfc-gOi7vUksGx_K_yA'

request({ url: geocodeUrl, json: true }, (err, response) => {
    
    console.log(response);
})



// request({ url: url, json: true }, (err, response) => {
    
//     console.log(response);
// })