import { observable, action, ObservableMap, computed } from 'mobx';

interface IService {
  logo: string;
  name: string;
  shortDescription: string;
  longDescription:  string;
  subdomain: string;
  roles: string[];
}

class ServiceListStore {
  @observable services: ObservableMap<IService> = observable.map<IService>({})

  @computed getRoles = () => {
    //@TODO: calculate the list of all the roles 
  }

  @action clientApiGetServiceList = () => {
    // GET /v1/api/client/service/list
  }
}