import { observable, action, ObservableMap, computed } from 'mobx';

interface IService {
  logo: string;
  name: string;
  shortDescription: string;
  longDescription:  string;
  subdomain: string;
  roles: string[];
}

export default class ServiceListStore {
  @observable services: ObservableMap<IService> = observable.map<IService>({})

  @computed get roles(){
    let roles:string[] = []

    this.services.forEach( service => {
      let serviceRoles = service.roles;
      serviceRoles.forEach( role => {
        if(roles.indexOf(role) === -1 )
          roles.push(role)
      });
    });
    roles.sort();

    return roles;
  }

  @action clientApiGetServiceList = () => {
    // GET /v1/api/client/service/list
    return fetch('/v1/api/client/service/list').then((response:any) => {
      if(response.ok){
        return response.json().then((data:any) => {
          Object.keys(data).forEach((key:string) => {
            this.services.set(key, data[key]);
          });
          return true;
        });
      }
    });
  }
}