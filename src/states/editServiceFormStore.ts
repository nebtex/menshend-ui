import { observable, action, ObservableMap } from 'mobx';

interface IServiceRole {
  luaScript: string;
  impersonateWithinRole: boolean;
  proxy: boolean;
  isActive: boolean;
}

export default class EditServiceFormStore {
  @observable subDomain: string = ''
  @observable logo: string = ''
  @observable name: string = ''
  @observable shortDescription: string = ''
  @observable longDescription: string = ''
  @observable longDescriptionUrl: String = ''
  //those are the roles that will be send to the backend
  //before the api call the save function it should check the serviceRoles
  //and remove all the roles in the roles map, not defined in serviceRoles
  @observable roles: ObservableMap<IServiceRole> = observable.map<IServiceRole>({})
  //service roles this is useful for maintain a track of the roles that will be
  //send to the backend
  @observable serviceRoles: string[]
  //all the roles this come from read all the current available services
  @observable allRoles:string[] = []

  @action updateLuaScript = (value: string, role: string) => {
    //check if role exist [before save the lua script]
    if (!this.roles.has(role)) return;
    let txRole = this.roles.get(role)
    txRole.luaScript = value
    this.roles.set(role, txRole);
  }

  @action updateImpersonateWithinRole = (value: boolean, role: string) => {
    this.editServiceForm.impersonateWithinRole = value;
  }

  @action updateProxy = (value: boolean, role: string) => {
    this.editServiceForm.proxy = value;
  }

  @action updateIsActive = (value: boolean, role: string) => {
    this.editServiceForm.isActive = value;
  }

  @action updateSubDomain = (value: string) => {
    this.editServiceForm.luaScript = value;
  }

  @action updateName = (value: string) => {
    this.editServiceForm.name = value;
  }

  @action updateLogo = (value: string) => {
    this.editServiceForm.logo = value;
  }

  @action updateShortDescription = (value: string) => {
    this.editServiceForm.shortDescription = value;
  }

  @action updateLongDescription = (value: string) => {
    this.editServiceForm.longDescription = value;
  }

  @action updateLongDescriptionUrl = (value: string) => {
    this.editServiceForm.longDescriptionUrl = value;
  }

  @action addRole = (role: string) => {
    //if role already exist leave
    if (this.roles.has(role)) return;

    let NewRole: IServiceRole = {
      luaScript: "default lua code",
      impersonateWithinRole: false,
      proxy: true,
      isActive: true,
    }
    this.roles.set(role, NewRole);
  }

  @action deleteRole = (role: string) => {
    this.roles.delete(role)
  }

  @action clientApiGetService = () => {
    // call "/v1/api/admin/service/{subDomain}"
  }

  @action clientApiSaveService = () => {
    // call "/v1/api/admin/service/save"
  }

  @action clientApiDeleteService = () => {
    // call "/v1/api/admin/service/delete"
  }
}