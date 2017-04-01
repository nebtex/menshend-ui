import { observable, action, ObservableMap } from 'mobx';
import { LoginStatus, AuthApi } from '../api/api';
import networkStore from './networkStore';
import clientServiceStore from './clientServiceStore';

const authApi: AuthApi = new AuthApi();

class LoginStore {
  @observable isLogged: boolean;
  @observable isAdmin: boolean;
  @observable canImpersonate: boolean;
  @observable sessionExpiresAt: number;

  constructor(){
    const loginStatus: LoginStatus = JSON.parse(localStorage.getItem('loginStatus')) ? JSON.parse(localStorage.getItem('loginStatus')) : {};
    this.isLogged = loginStatus.isLogged;
    this.isAdmin = loginStatus.isAdmin;
    this.canImpersonate = loginStatus.canImpersonate;
    this.sessionExpiresAt = loginStatus.sessionExpiresAt;
  }

  @action load = () => {
    networkStore.addPendingRequest();
    authApi.loginStatus().then((data:LoginStatus) => {
      this.isLogged = data.isLogged;
      this.isAdmin = data.isAdmin;
      this.canImpersonate = data.canImpersonate;
      this.sessionExpiresAt = data.sessionExpiresAt;
      
      // Set localStorage with the obtained Data
      localStorage.setItem('loginStatus', JSON.stringify(data));

      // Call clientServiceStore.load() if isLogged
      if(data.isLogged)
        clientServiceStore.load();

      // Update networkStore
      networkStore.updateLastResponse({message:'OK', statusCode: 200});
      networkStore.removePendingRequest();
    }).catch((response:Response) => {
      networkStore.updateLastResponse({message:response.statusText, statusCode: response.status});
      networkStore.removePendingRequest();      
    });
  }
}

const loginStore = new LoginStore();

loginStore.load();

export default loginStore;