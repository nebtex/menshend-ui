import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';

class NetworkStore {
  @observable lastResponseCode: string = ''
  @observable lastResponseMessage: string = ''

  @action updateLastResponseCode = (value:string) => {
    this.lastResponseCode = value;
  }

  @action updateLastResponseMessage = (value:string) => {
    this.lastResponseMessage = value;
  }
}

const networkStore = new NetworkStore();

export default networkStore;