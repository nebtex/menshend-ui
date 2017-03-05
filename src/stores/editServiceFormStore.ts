import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';
import ServiceListStore from './serviceListStore';
import { AdminApi, AdminService, AdminServiceCache, AdminServiceCors } from '../api/api';

interface IServiceRole {
  luaScript: string;
  impersonateWithinRole: boolean;
  proxy: boolean;
  isActive: boolean;
}

export default class EditServiceFormStore {
  adminApi: AdminApi = new AdminApi();

  @observable subDomain: string = ''
  @observable logo: string = ''
  @observable name: string = ''
  @observable shortDescription: string = ''
  @observable longDescription: string = ''
  @observable longDescriptionUrl: string = ''

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
    });
  }

  @action apiGetService = (serviceId:string) => {
    return this.adminApi.adminGetService({id:serviceId}).then((service:AdminService) => {
      //roleId ?
      this.name = service.name;
      this.logo = service.logo;
      this.shortDescription = service.shortDescription;
      this.longDescription = service.longDescription;
      this.longDescriptionUrl = service.longDescriptionUrl;
      //proxyCode?
      //proxyCodeLanguage ?
      //csrf ?
      //impersonateWithinRole ?
      //isActive ?
      //strategy ?
      //cache?
      //cors?
      //secretPaths?
      return true;
    }).catch((e:any) => {
      console.log('there was a problem', e);
      //@TODO: Notify there was a problem 
    });
  }

  @action apiSaveService = (serviceId:string) => {
    let service: AdminService = {
      id:serviceId,
      roleId: "", //@TODO: How to get this param?
      logo: this.logo,
      name: this.name,
      shortDescription: this.shortDescription,
      longDescription: this.longDescription,
      longDescriptionUrl: this.longDescriptionUrl,
      proxyCode: "", //@TODO: How to get this param?
      proxyCodeLanguage: 0, //@TODO: How to get this param?
      csrf: true, //@TODO: How to get this param?
      impersonateWithinRole: true, //@TODO: How to get this param?
      isActive: true, //@TODO: How to get this param?
      strategy: 0, //@TODO: How to get this param?
      cache: {
        "active": true, //@TODO: How to get this param?
        "ttl": 120 //@TODO: How to get this param?
      },
      cors: {
        "allowedOrigins": ["Array<string>"], //@TODO: How to get this param?
        "allowedMethods": ["Array<string>"], //@TODO: How to get this param?
        "allowedHeaders": ["Array<string>"], //@TODO: How to get this param?
        "allowCredentials": true, //@TODO: How to get this param?
        "optionsPassthrough": true, //@TODO: How to get this param?
        "maxAge": true, //@TODO: How to get this param?
        "exposedHeaders": ["Array<string>"] //@TODO: How to get this param?
      },
      secretPaths: ["Array<string>"]
    }

    return this.adminApi.adminSaveService({id:serviceId, body:service}).then((service:AdminService)=>{
      return true;
    }).catch(() => {
      //@TODO: Notify there was a problem 
    });
  }

  @action apiDeleteService = (serviceId:string) => {
    return this.adminApi.adminDeleteService({id:serviceId}).then(()=>{
      return true;
    }).catch(() => {
      //@TODO: Notify there was a problem 
    });
  }
}