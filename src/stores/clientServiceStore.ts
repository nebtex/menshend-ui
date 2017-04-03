import { observable, action, IObservableArray, toJS } from 'mobx';
import networkStore from './networkStore'; 
import { ClientApi, ClientService } from '../api/api';

const clientApi = new ClientApi();

class ClientServiceStore {
  @observable services: IObservableArray<ClientService> = observable.array<ClientService>([])
  @observable currentService:ClientService

  constructor() {
    const storagedServices: ClientService[] = localStorage.getItem('clientServices') ? JSON.parse(localStorage.getItem('clientServices')) : [];
    storagedServices.forEach(service => {
      this.services.push(service);
    });
  }

  @action updateCurrentService = (subdomain:string) => {
    const index = this.services.map(service => service.meta.subDomain).indexOf(subdomain);
    if(index > -1)
      this.currentService = this.services[index]
  }

  @action load() {
    networkStore.addPendingRequest();
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

clientServiceStore.load();

export default clientServiceStore; 