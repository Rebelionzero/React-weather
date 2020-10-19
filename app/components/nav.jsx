var React = require('react');
var {Link, IndexLink} = require("react-router");

var Nav = () => {
    return (
        <div>
            <h2>Nav Component</h2>
            <ul>
                <li>
                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>                        
                </li>
                <li>
                    <Link to="/about" activeClassName="about"  activeStyle={{fontWeight: 'bold'}}>About</Link>
                </li>
                <li>
                    <Link to="/example" activeClassName="ex"  activeStyle={{fontWeight: 'bold'}}>Example</Link>
                </li>
            </ul>
        </div>
    );
}

module.exports = Nav;