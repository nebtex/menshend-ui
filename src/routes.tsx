import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Services from './containers/Services';
import EditModalWrapper from './components/wrappers/EditModalWrapper/EditModalWrapper'

{/*<Router history={browserHistory}>
    <Route component={App} path="/ui">
      <IndexRoute component={Login} />
      <Route path="/ui/services" component={Services}>
        <Route path="role/:role"/>
        <Route path="role/:role/:subdmain" />
      </Route>
    </Route>
  </Router>*/}

const routes = (
  <Router history={browserHistory}>
    <Route component={App} path="/ui">
      <IndexRoute component={Services} />
    </Route>
  </Router>
);

export default routes;