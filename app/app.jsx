var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var MainComponent = require('./components/MainComponent.jsx');



// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
//load css
require('style!css!sass!app/styles/app.scss')


$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainComponent}>
        </Route>
    </Router>,
    document.getElementById('app')
);
