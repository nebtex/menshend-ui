import { observable, action, IObservableArray } from 'mobx';
import { FlashesApi, Flash } from '../api/api';
import networkStore from './networkStore';

const flashesApi = new FlashesApi();

class FlastStore {
  @observable flashes:IObservableArray<string> = observable.array<string>([]);
  constructor() {
    const flash:Flash = localStorage.getItem('flash') ? JSON.parse(localStorage.getItem('flash')) : {flashes:[]};
    flash.flashes.forEach(flash => {
      this.flashes.push(flash);
    });
  }

  @action load() {
    networkStore.addPendingRequest();
    flashesApi.getFlashes().then(flash => {
      flash.flashes.forEach(flash => {
        this.flashes.push(flash);
      });
      networkStore.updateLastResponse({message:'OK', statusCode: 200});
      networkStore.removePendingRequest();
    }).catch((response:Response) => {
      networkStore.updateLastResponse({message:response.statusText, statusCode: response.status});
      networkStore.removePendingRequest();
    });
  }
}

const flashStore = new FlastStore();

flashStore.load();

export default flashStore;