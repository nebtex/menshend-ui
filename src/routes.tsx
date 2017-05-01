import { ILoginFormProps } from './components/login/LoginForm/LoginForm';
import * as React from 'react';
import App from './containers/App';
import LoginWrapper from './wrappers/LoginWrapper';
import ServicesWrapper from './wrappers/ServicesWrapper';
import { History } from 'history'
import { MobxRouter, RouterStore, startRouter, Route } from 'mobx-router';
import routerStore from './stores/router'
import adminStore from './stores/editServiceFormStore'
import loginStore from './stores/loginStore'
import clientServiceStore from './stores/clientServiceStore'

import { Provider } from 'mobx-react';
import { observe } from "mobx"
const store = {
  app: {
    title: 'Menshend',
  },
  //here's how we can plug the routerStore into our store
  router: routerStore
};

export const views = {
  index: new Route({
    path:'/',
    beforeEnter: (route: any, params: any, store: any, queryParams: any) => {
      if (loginStore.isLogged) {
        routerStore.goTo(views.services);
      } else {
        routerStore.goTo(views.login);       
      }
    }
  }),
  login: new Route({
    path: '/login',
    component: <LoginWrapper />,
    onEnter: (route: any, params: any, store: any, queryParams: any) => {
      if(queryParams && queryParams.loginError)
        loginStore.updateLoginError(queryParams.loginError);

      if(queryParams && queryParams.subdomain)
        clientServiceStore.updateCurrentService(queryParams.subdomain);
    }
  }),
  services: new Route({
    path: '/services',
    component: <ServicesWrapper />,
    beforeEnter: (route:any, params:any, store:any) => {
      if (!loginStore.isLogged) {
        routerStore.goTo(views.login);   
        return false;
      }
    },
    onEnter: (route: any, params: any, store: any, queryParams: any) => {
      clientServiceStore.updateQueryTag(queryParams.tag)
    },
    onParamsChange: (route: any, params: any, store: any, queryParams: any) => {
      clientServiceStore.updateQueryTag(queryParams.tag)
    }
  }),
  servicesByRole: new Route({
    path: '/services/roles/:roleId',
    component: <ServicesWrapper />,
    beforeEnter: (route:any, params:any, store:any) => {
      if (!loginStore.isLogged) {
        routerStore.goTo(views.login);   
        return false;
      }
    },
    onEnter: (route: any, params: any, store: any, queryParams: any) => {
      clientServiceStore.updateRoleServicesList(params.roleId);
      clientServiceStore.updateQueryTag(queryParams.tag)
    },
    onParamsChange: (route: any, params: any, store: any, queryParams: any) => {
      clientServiceStore.updateRoleServicesList(params.roleId);
      clientServiceStore.updateQueryTag(queryParams.tag)
    }
  }),
  editModal: new Route({
    path: '/services/roles/:roleId/:subdomain',
    component: <ServicesWrapper />,
    beforeEnter: (route:any, params:any, store:any) => {
      if (!loginStore.isLogged) {
        routerStore.goTo(views.login);
        return false;
      }
    },
    onEnter: (route: any, params: any, store: any, queryParams: any) => {
      adminStore.roleId = params.roleId
      adminStore.subdomain = params.subdomain
      adminStore.showModal = true
    }
  })
};

startRouter(views, store);

const routes = (
  <Provider store={store}>
    <MobxRouter />
  </Provider>
)

export default routes;