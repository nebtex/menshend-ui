import { observable, action, ObservableMap, computed, IObservableArray } from 'mobx';
import { ClientApi, ClientService } from '../api/api';

interface IService {
  logo: string;
  name: string;
  shortDescription: string;
  longDescription:  string;
  subdomain: string;
  roles: string[];
}

class ServiceListStore {
  clientApi: ClientApi = new ClientApi();

  @observable services: IObservableArray<ClientService> = observable.array<ClientService>([])

  @computed get roles(){
    let roles:string[] = []

    this.services.forEach( service => {
      let role = service.roleId;
      if(roles.indexOf(role) === -1 )
        roles.push(role)
    });
    roles.sort();

    return roles;
  }

  @action clientApiGetServiceList = () => {
    return this.clientApi.listAvailableServices({}).then((clientServicesList:ClientService[]) => {
      this.services.clear()
      clientServicesList.forEach((service) => {
        this.services.push(service);
      });
      return true;
    }).catch((e:any) => {
      console.log(e);
      throw new Error(e)
    });
  }
}

const serviceListStore = new ServiceListStore();

export default serviceListStore;