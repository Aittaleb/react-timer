var React = require('react');
var { IndexLink, Link } = require('react-router');

var NavComponent = () => {
        return  (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Count Down</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created By <a href="https://github.com/Aittaleb/" target="blank">AitTaleb</a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }

module.exports = NavComponent;