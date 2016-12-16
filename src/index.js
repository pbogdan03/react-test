import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './app';
import Register from './components/Register';
import Home from './components/Home';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" components={{main: Home}} />
      <Route path="register" components={{main: Register}} />
    </Route>
  </Router>
), document.getElementById('root'));
