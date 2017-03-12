import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';
import ServiceListStore from './serviceListStore';
import { AdminApi, AdminService, AdminServiceCache, AdminServiceCors } from '../api/api';

const urlRegExp = new RegExp('https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}');

class EditServiceFormStore {
  adminApi: AdminApi = new AdminApi();

  strategies = {
    "Proxy": 0
  }

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
  @observable secretPaths: IObservableArray<string> = observable.array([])

  // **** Errors ****
  @observable nameError: boolean
  @observable logoError: boolean
  @observable longDescriptionUrlError: boolean

  // **** Aux observables
  @observable longDescriptionUrlActive: boolean

  @action updateRoleId = (roleId:string) => {
    this.roleId = roleId
  }

  @action updateLogo = (logo:string) => {
    this.logo = logo
  }

  @action updateLogoError = (logoError: boolean) => {
    this.logoError = logoError
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

  @action updateLongDescriptionUrlActive = (urlActive:boolean) => {
    this.longDescriptionUrlActive = urlActive;
  }

  // **** Cache ****

  @action updateTTL = (ttl:number) => {
    this.cache.ttl = ttl
  }

  @action updateCacheActive = (cacheActive:boolean) => {
    this.cache.active = cacheActive
  }

  // **** CORS *****

  @action updateAllowCredentials = (allowCredentials:boolean) => {
    this.cors.allowCredentials = allowCredentials;
  }

  @action updateOptionsPassthrough = (optionsPassthrough:boolean) => {
    this.cors.optionsPassthrough = optionsPassthrough;
  }

  @action updateMaxAge = (maxAge:boolean) => {
    this.cors.maxAge = maxAge;
  }

  @action addAllowedOrigin = (allowedOrigin:string) => {
    if(this.cors.allowedOrigins.includes(allowedOrigin)) return;
    let allowedOrigins = this.cors.allowedOrigins;
    allowedOrigins.push(allowedOrigin);
  }

  @action deleteAllowedOrigin = (allowedOrigin:string) => {
    if(!this.cors.allowedOrigins.includes(allowedOrigin)) return;
    const index = this.cors.allowedOrigins.indexOf(allowedOrigin);
    let allowedOrigins = this.cors.allowedOrigins;
    allowedOrigins.splice(index, 1);
  }

  @action addAllowedMethod = (allowedMethod:string) => {
    if(this.cors.allowedMethods.includes(allowedMethod)) return;
    let allowedMethods = this.cors.allowedMethods;
    allowedMethods.push(allowedMethod);
  }

  @action deleteAllowedMethod = (allowedMethod:string) => {
    if(!this.cors.allowedMethods.includes(allowedMethod)) return;
    const index = this.cors.allowedMethods.indexOf(allowedMethod);
    let allowedMethods = this.cors.allowedMethods;
    allowedMethods.splice(index, 1);
  }

  @action addAllowedHeader = (allowedHeader:string) => {
    if(this.cors.allowedHeaders.includes(allowedHeader)) return;
    let allowedHeaders = this.cors.allowedHeaders;
    allowedHeaders.push(allowedHeader);
  }

  @action deleteAllowedHeader = (allowedHeader:string) => {
    if(!this.cors.allowedHeaders.includes(allowedHeader)) return;
    const index = this.cors.allowedHeaders.indexOf(allowedHeader);
    let allowedHeaders = this.cors.allowedHeaders;
    allowedHeaders.splice(index, 1);
  }

  @action addExposedHeader = (exposedHeader:string) => {
    if(this.cors.exposedHeaders.includes(exposedHeader)) return;
    let exposedHeaders = this.cors.exposedHeaders;
    exposedHeaders.push(exposedHeader);
  }

  @action deleteExposedHeader = (exposedHeader:string) => {
    if(!this.cors.exposedHeaders.includes(exposedHeader)) return;
    const index = this.cors.exposedHeaders.indexOf(exposedHeader);
    let exposedHeaders = this.cors.exposedHeaders;
    exposedHeaders.splice(index, 1);
  }

  // **** Secret Paths ****

  @action addSecretPath = (secretPath:string) => {
    if(this.secretPaths.indexOf(secretPath) > -1) return;
    this.secretPaths.push(secretPath)
  }

  @action deleteSecretPath = (secretPath:string) => {
    const index = this.secretPaths.indexOf(secretPath)
    if(index === -1) return;
    this.secretPaths.splice(index, 1);
  }

  // **** Save service ****

  @action saveService = () => {
    this.nameError = this.name.trim() === '';
    this.longDescriptionUrlError = !urlRegExp.test(this.longDescriptionUrl) || (this.longDescriptionUrl === '' && this.longDescriptionUrlActive);

    if(!this.nameError && !this.longDescriptionUrlError){
      // @TODO: Send data here and check the logo error behavior, this is a component state
      console.log('There are no errors');
    }
  }

  // **** Api Client Calls ****

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
      service.secretPaths.forEach((service:string) => {
        this.secretPaths.push(service)
      });

      return true;
    }).catch((e:any) => {
      console.log('there was a problem', e);
      //@TODO: Notify there was a problem 
    });
  }

  @action apiSaveService = (serviceId:string) => {
    let service: AdminService = {
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

const editServiceFormStore = new EditServiceFormStore();

export default editServiceFormStore;