import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Services from './containers/Services';
import EditModalWrapper from './components/wrappers/EditModalWrapper/EditModalWrapper'

const routes = (
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRedirect to="/ui"/>
      <Route path="/ui" component={Login} />
      <Route path="/ui/services" component={Services} />
      <Route path="/ui/services/role/:role" component={Services}/>
      <Route path="/ui/services/role/:role/:subdmain" component={EditModalWrapper}/>
    </Route>
  </Router>
)

/*const routes = (
  <Router history={browserHistory}>
    <Route component={App} path="/ui">
      <IndexRoute component={Services} />
    </Route>
  </Router>
);*/

export default routes;