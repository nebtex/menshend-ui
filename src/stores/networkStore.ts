import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';

interface IResponse {
  statusCode:number
  message:string
}

class NetworkStore {
  @observable pendingRequest:number = 0
  @observable lastResponse:IResponse = {statusCode:0, message: 'none'}
  
  @action updateLastResponse = ({statusCode, message}:IResponse) => {
    this.lastResponse.message = message;
    this.lastResponse.statusCode = statusCode;
  }

  @action addPendingRequest = () => {
    this.pendingRequest += 1;
  }

  @action removePendingRequest = () => {
    this.pendingRequest -= 1;
  }
}

const networkStore = new NetworkStore();

export default networkStore;