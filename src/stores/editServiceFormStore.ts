import { observable, action, ObservableMap, toJS, IObservableArray } from 'mobx';
// import { AdminApi, AdminService, AdminServiceCache, AdminServiceCors, AdminServiceProxyCodeLanguageEnum, AdminServiceStrategyEnum } from '../api/api';
import { AdminApi, AdminService } from '../api/api';
import networkStore from './networkStore';

const urlRegExp = new RegExp('https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}');

class EditServiceFormStore {
  adminApi: AdminApi = new AdminApi();

  @observable roleId: string = ''
  @observable subdomain: string = ''
  @observable subdomainError: boolean
  @observable logo: string = ''
  @observable name: string = ''
  @observable shortDescription: string = ''
  @observable longDescription: string = ''
  @observable longDescriptionUrl: string = ''
  @observable proxyCode: string = ''
  @observable csrf: boolean = true
  @observable impersonateWithinRole: boolean = false
  // @observable proxyCodeLanguage: AdminServiceProxyCodeLanguageEnum = 'lua'
  @observable proxyCodeLanguage: any = 'lua'
  @observable isActive: boolean = true
  // @observable strategy: AdminServiceStrategyEnum = 'proxy'
  @observable strategy: any = 'proxy'
  // @observable cache: AdminServiceCache = {
  @observable cache: any = {
    active: true,
    ttl: 120
  }
  // @observable cors: AdminServiceCors = {
  @observable cors: any = {
    allowCredentials: false,
    optionsPassthrough: false,
    maxAge: false,
    allowedOrigins: new Array(),
    allowedHeaders: new Array(),
    allowedMethods: new Array(),
    exposedHeaders: new Array()
  }
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

  @action updateSubdomain = (subdomain:string) => {
    this.subdomain = subdomain
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

  @action updateCsrf = () => {
    this.csrf = !this.csrf
  }

  @action updateImpersonateWithinRole = () => {
    this.impersonateWithinRole = !this.impersonateWithinRole
  }

  // @action updateProxyCodeLanguage = (proxyCodeLanguage:AdminServiceProxyCodeLanguageEnum) => {
  @action updateProxyCodeLanguage = (proxyCodeLanguage:any) => {
    this.proxyCodeLanguage = proxyCodeLanguage
  }

  @action updateIsActive = () => {
    this.isActive = !this.isActive
  }

  // @action updateStrategy = (strategy:AdminServiceStrategyEnum) => {
  @action updateStrategy = (strategy:any) => {
    this.strategy = strategy
  }

  @action updateLongDescriptionUrlActive = () => {
    this.longDescriptionUrlActive = !this.longDescriptionUrlActive;
  }

  // **** Cache ****

  @action updateTTL = (ttl:number) => {
    this.cache.ttl = ttl
  }

  @action updateCacheActive = () => {
    this.cache.active = !this.cache.active
  }

  // **** CORS *****

  @action updateAllowCredentials = () => {
    this.cors.allowCredentials = !this.cors.allowCredentials;
  }

  @action updateOptionsPassthrough = () => {
    this.cors.optionsPassthrough = !this.cors.optionsPassthrough;
  }

  @action updateMaxAge = () => {
    this.cors.maxAge = !this.cors.maxAge;
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
    this.subdomainError = this.subdomain.trim() === '';
    this.longDescriptionUrlError = !urlRegExp.test(this.longDescriptionUrl) || (this.longDescriptionUrl === '' && this.longDescriptionUrlActive);

    if(!this.nameError && !this.longDescriptionUrlError && !this.subdomainError){
      // @TODO: Send data here and check the logo error behavior, this is a component state
      // @TODO: Set the right url based on the role and the subdomain
      console.log('There are no errors');
    }
  }

  // **** Api Client Calls ****

  @action apiGetService = (serviceId:string) => {
    // return this.adminApi.adminGetService({id:serviceId}).then((service:AdminService) => {
    return this.adminApi.adminGetService({id:serviceId}).then((service:any) => {
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
    // let service: AdminService = {
    let service: any = {
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