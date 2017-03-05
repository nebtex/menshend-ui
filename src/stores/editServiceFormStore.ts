import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';
import ServiceListStore from './serviceListStore';
import { AdminApi, AdminService, AdminServiceCache, AdminServiceCors } from '../api/api';

export default class EditServiceFormStore {
  adminApi: AdminApi = new AdminApi();

  @observable roleId: string = ''
  @observable logo: string = ''
  @observable name: string = ''
  @observable shortDescription: string = ''
  @observable longDescription: string = ''
  @observable longDescriptionUrl: string = ''
  @observable proxyCode: string = '__=== your code here ==='
  @observable csrf: boolean
  @observable impersonateWithinRole: boolean
  @observable proxyCodeLanguage: number
  @observable isActive: boolean
  @observable strategy: number
  @observable cache: AdminServiceCache
  @observable cors: AdminServiceCors
  @observable secretPaths: string[]

  @action updateRoleId = (roleId:string) => {
    this.roleId = roleId
  }

  @action updateLogo = (logo:string) => {
    this.logo = logo
  }

  @action updateName = (name:string) => {
    this.name = name
  }

  @action updateShortDescription = (shortDescription:string) => {
    this.shortDescription = shortDescription
  }

  @action updateLongDescription = (longDescription:string) => {
    this.longDescription = longDescription
  }

  @action updateLongDescriptionUrl = (longDescriptionUrl:string) => {
    this.longDescriptionUrl = longDescriptionUrl
  }

  @action updateProxyCode = (proxyCode:string) => {
    this.proxyCode = proxyCode
  }

  @action updateCsrf = (csrf:boolean) => {
    this.csrf = csrf
  }

  @action updateImpersonateWithinRole = (impersonateWithinRole:boolean) => {
    this.impersonateWithinRole = impersonateWithinRole
  }

  @action updateProxyCodeLanguage = (proxyCodeLanguage:number) => {
    this.proxyCodeLanguage = proxyCodeLanguage
  }

  @action updateIsActive = (isActive:boolean) => {
    this.isActive = isActive
  }

  @action updateStrategy = (strategy:number) => {
    this.strategy = strategy
  }

  //@TODO: How to manage this
  @action updateCache = () => {

  }

  //@TODO: How to manage this
  @action updateCors = () => {

  }

  //@TODO: How to manage this
  @action updateSecretPaths = () => {

  }

  //service roles this is useful for maintain a track of the roles that will be send to the backend
  @observable serviceRoles: IObservableArray<string> = observable.array<string>([])

  //all the roles this come from read all the current available services
  @observable allRoles: IObservableArray<string> = observable.array<string>([])

  @action apiGetService = (serviceId:string) => {
    return this.adminApi.adminGetService({id:serviceId}).then((service:AdminService) => {
      this.roleId = service.roleId
      this.name = service.name;
      this.logo = service.logo;
      this.shortDescription = service.shortDescription;
      this.longDescription = service.longDescription;
      this.longDescriptionUrl = service.longDescriptionUrl;
      this.proxyCode = service.proxyCode
      this.proxyCodeLanguage = service.proxyCodeLanguage
      this.csrf = service.csrf
      this.impersonateWithinRole = service.impersonateWithinRole
      this.isActive = service.isActive
      this.strategy = service.strategy
      this.cache = service.cache
      this.cors = service.cors
      this.secretPaths = service.secretPaths
      return true;
    }).catch((e:any) => {
      console.log('there was a problem', e);
      //@TODO: Notify there was a problem 
    });
  }

  @action apiSaveService = (serviceId:string) => {
    let service: AdminService = {
      id:serviceId,
      roleId:this.roleId,
      logo: this.logo,
      name: this.name,
      shortDescription: this.shortDescription,
      longDescription: this.longDescription,
      longDescriptionUrl: this.longDescriptionUrl,
      proxyCode: this.proxyCode,
      proxyCodeLanguage: this.proxyCodeLanguage,
      csrf: this.csrf,
      impersonateWithinRole: this.impersonateWithinRole,
      isActive: this.isActive,
      strategy: this.strategy,
      cache: toJS(this.cache),
      cors: toJS(this.cors),
      secretPaths: this.secretPaths
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