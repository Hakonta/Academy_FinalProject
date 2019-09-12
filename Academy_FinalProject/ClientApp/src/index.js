import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './Containers/AppView';
import registerServiceWorker from './registerServiceWorker';
import AboutView from './Containers/AboutView'
import { BrowserRouter as Router, Route} from "react-router-dom";
import accountView from './Containers/AccountView';
import contactView from './Containers/ContactView';
import safetyView from './Containers/SafetyView';

const Routing = (
<Router>
    <React.Fragment>
        <Route exact path="/" component={AppView}/>
        <Route path="/about" component={AboutView}/>
        <Route path="/account" component={accountView}/>
        <Route path="/contact" component={contactView}/>
        <Route path="/safety" component={safetyView}/>
    </React.Fragment>
</Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

registerServiceWorker();


