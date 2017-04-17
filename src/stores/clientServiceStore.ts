import { observable, action, IObservableArray, toJS } from 'mobx';
import networkStore from './networkStore'; 
import { ClientApi, ClientService } from '../api/api';
import { BasePath } from './variables'

const clientApi = new ClientApi();
clientApi.basePath = BasePath

class ClientServiceStore {
  @observable services: Array<ClientService>
  @observable currentService:ClientService
  @observable currentRole:string
  @observable availableRoles: Array<string>
  @observable roleServicesList: string 
  @observable queryTag: string
  currentDomain:string

  constructor() {
    const storagedServices: ClientService[] = localStorage.getItem('clientServices') ? JSON.parse(localStorage.getItem('clientServices')) : [];
    this.services = storagedServices;
  }

  @action updateCurrentService = (subdomain:string) => {
    this.currentDomain = subdomain.endsWith('.') ? subdomain : subdomain + '.';
    const obtainedServices = this.services.filter(service => service.meta.subDomain === this.currentDomain)
    const obtainedRoles = obtainedServices.map(service => service.meta.roleId)

    if((this.currentService && this.currentService.meta.subDomain !== obtainedServices[0].meta.subDomain) || !this.currentRole){
      this.currentRole = obtainedServices[0].meta.roleId
    }

    this.availableRoles = obtainedRoles
    this.currentService = obtainedServices[0]
  }

  @action updateRole = (role:string) => {
    const obtainedService = this.services.filter(service => (service.meta.roleId === role && service.meta.subDomain === this.currentDomain))[0]
    this.currentService = obtainedService
    this.currentRole = role
  }

  @action updateRoleServicesList = (roleId:string) => {
    this.roleServicesList = roleId;
  }

  @action updateQueryTag = (tag:string) => {
    this.queryTag = tag;
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