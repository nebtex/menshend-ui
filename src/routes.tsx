import { ILoginFormProps } from './components/login/LoginForm/LoginForm';
import * as React from 'react';
import App from './containers/App';
import LoginWrapper from './wrappers/LoginWrapper';
import Services from './containers/Services';
import { History } from 'history'
import { MobxRouter, RouterStore, startRouter, Route } from 'mobx-router';
import routerStore from './stores/router'
import adminStore from './stores/editServiceFormStore'

import { Provider } from 'mobx-react';
import { observe } from "mobx"
const store = {
  app: {
    title: 'Menshend',
  },
  //here's how we can plug the routerStore into our store
  router: routerStore
};

const views = {
  login: new Route({
    path: '/login',
    component: <LoginWrapper />
  }),
  services: new Route({
    path: '/services',
    component: <Services />
  }),
  servicesByRole: new Route({
    path: '/services/roles/:roleId',
    component: <Services />
  }),
  editModal: new Route({
    path: '/services/roles/:roleId/:subdomain',
    component: <Services />,
    onEnter: (route: any, params: any, store: any, queryParams: any) => {
      adminStore.roleId = params.roleId
      adminStore.subdomain = params.subdomain
      adminStore.showModal = true
    }
  })
};

startRouter(views, store);


/*observableHistory.listen((location, action) => {
  const query = parseQueryString(location.search)
  console.log(location.search, location.hash, action)
 
  if (this.props.match.pathlocation.state.query.loginError)
    //  loginStore.updateLoginError(this.props.location.state.query.loginError);
 
    //if(this.props.location.state.query.Subdomain)
    //  clientServiceStore.updateCurrentService(this.props.location.state.query.Subdomain)
})
})*/

const routes = (
  <Provider store={store}>
    <MobxRouter />
  </Provider>

)



export default routes;