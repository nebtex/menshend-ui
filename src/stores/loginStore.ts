import { observable, action, ObservableMap } from 'mobx';

interface ILoginStatus {
  isLogged: boolean;
  isAdmin: boolean;
  canImpersonate: boolean;
  sessionExpiresAt: number;
}

export default class LoginStore {
  @observable loginStatus:ILoginStatus;

  @action clientApiLoginStatus = () => {
    // GET /v1/api/client/login/status
    // @TODO: set loginStatus here
  }
}