import * as React from 'react';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Services from './containers/Services';
import EditModalWrapper from './components/wrappers/EditModalWrapper/EditModalWrapper'

const routes = (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRedirect to="ui"/>
      <Route component={App} path="ui">
        <IndexRoute component={Login} />
        <Route path="services" component={Services}>
          <Route path="role/:role"/>
          <Route path="role/:role/:subdmain" />
        </Route>
      </Route>
    </Route>
  </Router>
);

export default routes;