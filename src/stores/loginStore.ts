import { observable, action, ObservableMap } from 'mobx';
import { LoginStatus, AuthApi } from '../api/api';
import networkStore from './networkStore';
import clientServiceStore from './clientServiceStore';
import { BasePath, ownFetch} from './variables'

const authApi: AuthApi = new AuthApi();
authApi.basePath = BasePath
authApi.fetch = ownFetch;


class LoginStore {
  @observable isLogged: boolean;
  @observable isAdmin: boolean;
  @observable canImpersonate: boolean;
  @observable sessionExpiresAt: number;
  @observable loginError: string = '';

  @observable loading:boolean = true;

  @action load = () => {
    networkStore.addPendingRequest();
    authApi.loginStatus().then((data:LoginStatus) => {
      this.isLogged = data.isLogged;
      this.isAdmin = data.isAdmin;
      this.canImpersonate = data.canImpersonate;
      this.sessionExpiresAt = data.sessionExpiresAt;

      // Call clientServiceStore.load() if isLogged
      if(data.isLogged)
        clientServiceStore.load();

      // set the loading observable as false
      this.loading = false;

      // Update networkStore
      networkStore.updateLastResponse({message:'OK', statusCode: 200});
      networkStore.removePendingRequest();
    }).catch((response:Response) => {
      // set the loading observable as false
      this.loading = false;
      
      networkStore.updateLastResponse({message:response.statusText, statusCode: response.status});
      networkStore.removePendingRequest();      
    });
  }

  @action updateLoginError = (loginError:string) => {
    this.loginError = loginError;
  }
}

const loginStore = new LoginStore();

loginStore.load();

export default loginStore;
