import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Services from './containers/Services';

const routes = (
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRedirect to="/ui"/>
      <Route path="/ui" component={Login} />
      <Route path="/ui/services" component={Services}>
        <Route path="role/:role"/>
      </Route>
    </Route>
  </Router>
)

export default routes;