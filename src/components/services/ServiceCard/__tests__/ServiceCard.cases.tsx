import ServiceInfoCard, { IServiceCardProps } from '../ServiceCard';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IServiceCardProps} = {};

Cases['User is admin'] = {
  service: {
    name: 'My Test Service', 
    short_description: 'My test service short description',
    long_description: 'My test service long description', 
    logo: testLogo,
    roles: ['role1', 'role2', 'role3']
  },
  user: {
    isLogged: true,
    expiresAt: Date.now() + 3600000,
    isAdmin: true,
	  canImpersonate:true
  },
  openEditModal: () => {}
}

Cases['User is not admin'] = {
  service: {
    name: 'My Test Service', 
    short_description: 'My test service short description',
    long_description: 'My test service long description', 
    logo: testLogo,
    roles: ['role1', 'role2', 'role3']
  },
  user: {
    isLogged: true,
    expiresAt: Date.now() + 3600000,
    isAdmin: false,
	  canImpersonate:true
  },
  openEditModal: () => {}
}

export default Cases;