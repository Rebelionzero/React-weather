var axios = require("axios");
const { Redirect } = require("react-router");

const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather?appid=e2e1e0d99ec43f1c569859c05a4130f0&units=metric";

var api = "";

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

module.exports = {
     getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        },function(res){
            throw new Error(res.data.message);
        });
    }
};