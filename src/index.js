import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { urls } from './urlsUtils';
import * as serviceWorker from './serviceWorker';
import Register from './Pages/Register/Register.js';
import Kitchen from './Pages/Kitchen/kitchen.js';
import Hall from './Pages/Hall/hall.js';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={urls.login.path} component={App} />
        <Route path={urls.register.path} component={Register} />
        <Route path={urls.kitchen.path} component={Kitchen} />
        <Route path={urls.hall.path} component={Hall} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
