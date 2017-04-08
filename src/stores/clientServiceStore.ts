import { observable, action, IObservableArray, toJS } from 'mobx';
import networkStore from './networkStore'; 
import { ClientApi, ClientService } from '../api/api';
import { BasePath } from './variables'

const clientApi = new ClientApi();
clientApi.basePath = BasePath

class ClientServiceStore {
  @observable services: Array<ClientService>
  @observable currentService:ClientService
  currentDomain:string;

  constructor() {
    const storagedServices: ClientService[] = localStorage.getItem('clientServices') ? JSON.parse(localStorage.getItem('clientServices')) : [];
    this.services = storagedServices;
  }

  @action updateCurrentService = (subdomain:string) => {
    this.currentDomain = subdomain;
    const index = this.services.map(service => service.meta.subDomain).indexOf(subdomain);
    if(index > -1)
      this.currentService = this.services[index]
  }

  @action load() {
    networkStore.addPendingRequest();
    clientApi.listAvailableServices({}).then((services:ClientService[]) => {
      this.services = services;
      localStorage.setItem('clientServices', JSON.stringify(toJS(this.services)));
      this.updateCurrentService(this.currentDomain);
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