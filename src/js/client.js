import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './pages/App';
import Home from './pages/Home';
import Repos from './pages/Repos';
import About from './pages/About';
import User from './pages/User';
import Contacts from './pages/Contacts';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
  ,app);




