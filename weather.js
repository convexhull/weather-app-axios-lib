const axios = require('axios');

var getWeather = (lat,lng) => {
    var weatherUrl = `https://api.darksky.net/forecast/6e2c6503cdefa6a9beed649727ed1c92/${lat},${lng}`;
    axios.get(weatherUrl)
    .then( (response) => {
        var temp = response.data.currently.temperature;
        var appTemp = response.data.currently.apparentTemperature;
        console.log(`It is ${temp} but feels like ${appTemp}`);
    }).catch( (error) => {
        if(error.code === 'ENOTFOUND'){
            console.log('Cannot connect to the weather api');
        }
        else {
            console.log(error.message);
        }
    });
};

module.exports = {
    getWeather
}