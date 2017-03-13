import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';

class NetworkStore {
  @observable lastResponseMessage: string = ''

  @action updateLastResponseMessage = (value:string) => {
    this.lastResponseMessage = value;
  }
}

const networkStore = new NetworkStore();

export default networkStore;