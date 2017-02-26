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
    // GET /v1/api/client/status
    return fetch('/v1/api/client/status').then((response:any) => {
      if(response.ok){
        return response.json().then((data:any) => {
          this.loginStatus = data;
        })
      }else {
        throw new Error('There was a problem with the response')
      }
    }).catch(() => {

    });
  }
}