const request = require('request');

const forecast = ( lat, lon, calledBack ) => {
    
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b2418f26f3b3b74e1d3817288d21b8e5`;
    
    request( {url: url, json:true}, (err, response ) => {
        if(err){
            calledBack('Unable to connect weather service!', undefined);
        }   else if(response.body.error){
            calledBack('Unable to find location', undefined );
        }   else{
            calledBack(undefined, response.body.weather[0].description );
        }
        
    })
}

module.exports = forecast;