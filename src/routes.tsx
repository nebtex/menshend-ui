import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import LoginWrapper from './wrappers/LoginWrapper';
import Services from './containers/Services';

const routes = (
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRedirect to="/login"/>
      <Route path="/login" component={LoginWrapper} />
    </Route>
  </Router>
)

export default routes;