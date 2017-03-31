import { observable, action, ObservableMap } from 'mobx';
import { LoginStatus, AuthApi } from '../api/api';

const authApi: AuthApi = new AuthApi();

export default class LoginStore {
  @observable loginStatus:LoginStatus;

  @action clientApiLoginStatus = () => {
    authApi.loginStatus().then((data:LoginStatus) => {
      this.loginStatus = data;
    })
  }

  @action clientApiLogout = () => {
    authApi.loginStatus().then((data:LoginStatus) => {
      //@TODO: What to do here?
    })
  }
}