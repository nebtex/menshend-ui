import ServicesPanel, { IServicesPanelProps } from '../ServicesPanel';
import services from './mockData';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IServicesPanelProps} = {};

Cases['Default'] = {
  roles:['role1', 'role2', 'role3', 'role4'],
  services: services,
  user: {
    isLogged: true,
    expiresAt: Date.now() + 3600000,
    isAdmin: true,
	  canImpersonate:true
  }
}

export default Cases;