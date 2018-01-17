var React = require('react');
// var NavComponent = require('./NavComponent.jsx');
var NavComponent = require('Nav');


var MainComponent = React.createClass({
    render: function () {
        return (
            <div>
                <NavComponent />
                <div >
                    <div >
                        <p> React timer MainComponent</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MainComponent;