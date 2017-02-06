import ServicesPanel, { IServicesPanelProps } from '../ServicesPanel';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IServicesPanelProps} = {};

Cases['Default'] = {
  roles:['role1', 'role2', 'role3', 'role4'],
  services: [
    {
      name: 'Github',
      short_description: 'short description service 1',
      long_description: 'long description service 1',
      logo: testLogo,
      roles: ['role1', 'role3']
    },
    {
      name: 'Bitbucket',
      short_description: 'short description service 2',
      long_description: 'long description service 2',
      logo: testLogo,
      roles: ['role1', 'role2']
    },
    {
      name: 'JIRA',
      short_description: 'short description service 3',
      long_description: 'long description service 3',
      logo: testLogo,
      roles: ['role2', 'role4']
    }
  ],
  user: {
    isLogged: true,
    expiresAt: Date.now() + 3600000,
    isAdmin: true,
	  canImpersonate:true
  }
}

export default Cases;