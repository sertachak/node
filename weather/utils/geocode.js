const request = require('request');

const geoCode = ( address, callback ) => {  
    console.log( address );
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2VydGFjaGFrIiwiYSI6ImNrYmY5bXhsczB0ZTgzMG5vc2NlNGpnanQifQ.fctWfc-gOi7vUksGx_K_yA`
    request({ url: geocodeUrl, json: true }, (err, response) => {
        if(err){
            callback('Unable to connect weather service!', undefined);
        }   else if(response.body.error){
            callback('Unable to find location', undefined );
        }   else{
            callback(undefined,
                    {   latitude:response.body.features[0].center[1], 
                        longitude:response.body.features[0].center[0] } );
        }
})
}

module.exports = geoCode;