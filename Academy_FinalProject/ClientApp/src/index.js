import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './Containers/AppView';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AppView />, document.getElementById('root'));
registerServiceWorker();


