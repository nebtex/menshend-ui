import * as React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './app';
import Login from './containers/Login';

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Login} />
    </Route>
  </Router>
);

export default routes;