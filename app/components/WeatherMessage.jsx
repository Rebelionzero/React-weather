var React = require("react");

var WeatherMessage = (props) => {
   var {temp, location} = props;
    return (
        <div>
            <h3>Its is {temp} in  {location}</h3>
        </div>
    );
}

/* Otra forma

var WeatherMessage = ({temp, location}) => {
    
    return (
        <div>
            <h3>Its is {temp} in  {location}</h3>
        </div>
    );
}

*/

module.exports = WeatherMessage;