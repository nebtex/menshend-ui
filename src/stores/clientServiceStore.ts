import { observable, action, IObservableArray, toJS } from 'mobx';
import networkStore from './networkStore'; 
import { ClientApi, ClientService } from '../api/api';

const clientApi = new ClientApi();

class ClientServiceStore {
  @observable services: IObservableArray<ClientService> = observable.array<ClientService>([])

  constructor() {
    this.services = localStorage.getItem('clientServices') ? JSON.parse(localStorage.getItem('clientServices')) : [];
  }

  @action onload() {
    clientApi.listAvailableServices({}).then((services:ClientService[]) => {
      services.forEach(service => {
        this.services.push(service);
      });
      localStorage.setItem('clientServices', JSON.stringify(toJS(this.services)));
      networkStore.updateLastResponse({message:'OK', statusCode: 200});
      networkStore.removePendingRequest();
    }).catch((response:Response) => {
      networkStore.updateLastResponse({message:response.statusText, statusCode: response.status});
      networkStore.removePendingRequest();
    });
  }
}

const clientServiceStore:ClientServiceStore = new ClientServiceStore();

export default clientServiceStore; 