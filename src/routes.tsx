import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Services from './containers/Services';
import EditModalWrapper from './components/wrappers/EditModalWrapper/EditModalWrapper'

const routes = (
  <Router history={browserHistory}>
    <Route component={App} path="/ui">
      <IndexRoute component={Login} />
      <Route path="/ui/services" component={Services} />
    </Route>
  </Router>
);

export default routes;