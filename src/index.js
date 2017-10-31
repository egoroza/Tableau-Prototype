import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './Bulma.css';
import './font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
