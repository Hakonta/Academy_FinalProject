import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './Containers/AppView';
import registerServiceWorker from './registerServiceWorker';
import AboutView from './Containers/AboutView'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routing = (
<Router>
    <div>
        <Route exact path="/" component={AppView}>
        </Route>
        <Route path="/about" component={AboutView}>
        </Route>
    </div>
</Router>
)


ReactDOM.render(Routing, document.getElementById('root'));
registerServiceWorker();


