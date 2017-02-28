import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';
import ServiceListStore from './serviceListStore';

interface IServiceRole {
  luaScript: string;
  impersonateWithinRole: boolean;
  proxy: boolean;
  isActive: boolean;
}

interface IResponse {
  success: boolean;
  message: string;
  roles: {[id:string]:any}
}

interface IServicePayload {
  subDomain: string;
  logo: string;
  name: string; 
  shortDescription: string;
  longDescription: string;
  longDescriptionUrl: string;
  roles: {[role:string]:IServiceRole}
}

interface IServiceResponse {
  success: boolean;
  message: string;
  service: IServicePayload;
}

export default class EditServiceFormStore {
  @observable subDomain: string = ''
  @observable logo: string = ''
  @observable name: string = ''
  @observable shortDescription: string = ''
  @observable longDescription: string = ''
  @observable longDescriptionUrl: string = ''
  @observable response: IResponse;
  
  // roles that will be sent to backend, remove all the roles in the roles map that are not defined in serviceRoles
  @observable roles: ObservableMap<IServiceRole> = observable.map<IServiceRole>({})
  
  //service roles this is useful for maintain a track of the roles that will be send to the backend
  @observable serviceRoles: IObservableArray<string> = observable.array<string>([])

  //all the roles this come from read all the current available services
  @observable allRoles: IObservableArray<string> = observable.array<string>([])

  @action updateLuaScript = (value: string, role: string) => {
    if (!this.roles.has(role)) return;
    let txRole = this.roles.get(role)
    txRole.luaScript = value
    this.roles.set(role, txRole);
  }

  @action updateImpersonateWithinRole = (value: boolean, role: string) => {
    if (!this.roles.has(role)) return;
    let txRole = this.roles.get(role)
    txRole.impersonateWithinRole = value
    this.roles.set(role, txRole);
  }

  @action updateProxy = (value: boolean, role: string) => {
    if (!this.roles.has(role)) return;
    let txRole = this.roles.get(role)
    txRole.proxy = value
    this.roles.set(role, txRole);
  }

  @action updateIsActive = (value: boolean, role: string) => {
    if (!this.roles.has(role)) return;
    let txRole = this.roles.get(role)
    txRole.isActive = value
    this.roles.set(role, txRole);
  }

  @action updateSubDomain = (value: string) => {
    this.subDomain = value;
  }

  @action updateName = (value: string) => {
    this.name = value;
  }

  @action updateLogo = (value: string) => {
    this.logo = value;
  }

  @action updateShortDescription = (value: string) => {
    this.shortDescription = value;
  }

  @action updateLongDescription = (value: string) => {
    this.longDescription = value;
  }

  @action updateLongDescriptionUrl = (value: string) => {
    this.longDescriptionUrl = value;
  }

  @action addRole = (role: string) => {
    //if role already exist leave
    if (this.roles.has(role)) return;

    let NewRole: IServiceRole = {
      luaScript: "__==== your code here ====",
      impersonateWithinRole: false,
      proxy: true,
      isActive: true,
    }
    this.roles.set(role, NewRole);
  }

  @action deleteRole = (role: string) => {
    this.roles.delete(role)
  }

  @action addServiceRole = (role:string) => {
    if(this.serviceRoles.indexOf(role)>-1) return;
    this.serviceRoles.push(role);
    this.serviceRoles.sort();
    this.addRole(role);
  }

  @action deleteServiceRole = (role:string) => {
    this.serviceRoles.remove(role);
  }

  @action addToAllRoles = (role:string) => {
    if(this.allRoles.indexOf(role)>-1) return;
    this.allRoles.push(role);
    this.allRoles.sort();
  }

  @action deleteFromAllRoles = (role:string) => {
    this.allRoles.remove(role);
  }

  @action moveRoleFromAllToService = (role:string) => {
    this.deleteFromAllRoles(role);
    this.addServiceRole(role);
  }

  @action moveRoleFromServiceToAll = (role:string) => {
    this.deleteServiceRole(role);
    this.addToAllRoles(role);
  }

  @action save = () => {
    let rolesToDelete: string[] = []
    
    // clean the roles map before api call
    this.roles.forEach((role:IServiceRole, key:string) => {
      if(this.serviceRoles.indexOf(key) === -1)
        rolesToDelete.push(key)
    })

    return Promise.all([this.clientApiSaveService(), this.clientApiDeleteService(rolesToDelete)]).then(() => {
      return this.clientApiGetService(this.subDomain).then(() => {
        return true;
      }).catch((e:any) => {
        throw new Error (e);
      })
    });
  }

  @action clientApiGetService = (subDomain:string) => {
    // call "/v1/api/admin/service/{subDomain}"
    return fetch(`/v1/api/admin/service/${subDomain}`).then((response:any) => {
      if(response.ok){
        return response.json().then((data:IServiceResponse) => {
          this.subDomain = data.service.subDomain;
          this.logo = data.service.logo;
          this.name = data.service.name;
          this.shortDescription = data.service.shortDescription;
          this.longDescription = data.service.longDescription;
          this.longDescriptionUrl = data.service.longDescriptionUrl;

          Object.keys(data.service.roles).forEach((key) => {
            this.roles.set(key, data.service.roles[key]);
          });
          return true;
        });
      }else {
        throw new Error('There was a problem with the obtained response')        
      }
    }).catch((e:any) => {
      throw new Error(e)
    });
  }

  @action clientApiSaveService = () => {
    // call "/v1/api/admin/service/save"
    let body:any = {}
    let filteredRoles:ObservableMap<IServiceRole> = observable.map<IServiceRole>({})

    this.serviceRoles.forEach(role => {
      filteredRoles.set(role, this.roles.get(role))
    });

    body.subDomain = this.subDomain
    body.logo = this.logo
    body.name = this.name
    body.shortDescription = this.shortDescription
    body.longDescription = this.longDescription
    body.longDescriptionUrl = this.longDescriptionUrl
    body.roles = toJS(filteredRoles)

    return fetch('/v1/api/admin/service/save', { method: 'post', body: body }).then((response:any) => {
      if(response.ok){
        return response.json().then((data:any) => {
          this.response = data;
          return true;
        });
      }else {
        throw new Error('There was a problem with the obtained response')        
      }
    }).catch((e:any) => {
      throw new Error(e)
    });
  }

  @action clientApiDeleteService = (rolesToDelete:string[]) => {
    // call "/v1/api/admin/service/delete"
    let body:any = {
      subDomain: this.subDomain,
      roles: rolesToDelete
    }

    return fetch('/v1/api/admin/service/delete', { method: 'post', body: body }).then((response:any) => {
      if(response.ok){
        return response.json().then((data:any) => {
          this.response = data;
          return true;
        });
      }else {
        throw new Error('There was a problem with the obtained response')
      }
    }).catch((e:any) => {
      throw new Error(e)
    });
  }
}