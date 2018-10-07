const axios = require('axios');
const weather = require('./weather');



var getCoord = (address) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAaKGSSBkG2cpZ03L0Jix1LQu6dTHlS9yg`)
    .then( (response) => {
        
        if(response.data.status === 'ZERO_RESULTS') {
            throw new Error('Can\'t find that place');
        }
        else {
            console.log(response.data.results[0].formatted_address);
            weather.getWeather(response.data.results[0].geometry.location.lat,response.data.results[0].geometry.location.lng);
        }
    }).catch( (error) => {
        if(error.code === 'ENOTFOUND') {
            console.log('Can\'t connect to google API');
        }
        else {
            console.log(error.message);
        }  
    });
}

module.exports = {
    getCoord
}