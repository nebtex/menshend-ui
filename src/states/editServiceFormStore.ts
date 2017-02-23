import { observable } from 'mobx';

interface IEditServiceForm {
  luaScript:string;
  impersonateWithinRole: boolean;
  proxy: boolean;
  isActive: boolean;

  subDomain:string;
  logo:string;
  name: string;
  shortDescription: string;
  longDescription: string;
  longDescriptionUrl: string;
  roles: string[];
}

export default class EditServiceFormStore {
  @observable editServiceForm: IEditServiceForm =  {
    luaScript:'',
    impersonateWithinRole: false,
    proxy: false,
    isActive: true,

    subDomain:'',
    logo:'',
    name: '',
    shortDescription: '',
    longDescription: '',
    longDescriptionUrl: '',
    roles: ['']
  };
  
  updateLuaScript = (value:string) => {
    this.editServiceForm.luaScript = value;
  }

  updateImpersonateWithinRole = (value:boolean) => {
    this.editServiceForm.impersonateWithinRole = value;
  }

  updateProxy = (value:boolean) => {
    this.editServiceForm.proxy = value;
  }

  updateIsActive = (value:boolean) => {
    this.editServiceForm.isActive = value;
  }

  updateSubDomain = (value:string) => {
    this.editServiceForm.luaScript = value;
  }

  updateName = (value:string) => {
    this.editServiceForm.name = value;
  }

  updateLogo = (value:string) => {
    this.editServiceForm.logo = value;
  }

  updateShortDescription = (value:string) => {
    this.editServiceForm.shortDescription = value;
  }

  updateLongDescription = (value:string) => {
    this.editServiceForm.longDescription = value;
  }

  updateLongDescriptionUrl = (value:string) => {
    this.editServiceForm.longDescriptionUrl = value;
  }

  addRole = (role:string) => {
    this.editServiceForm.roles.push(role);
    this.editServiceForm.roles.sort();    
  }

  deleteRole = (role:string) => {
    const roleIndex = this.editServiceForm.roles.indexOf(role);
    if(roleIndex > -1){
      this.editServiceForm.roles.splice(roleIndex, 1);
    }
  }
}