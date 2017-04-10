import ServiceInfoCard, { IServiceCardProps } from '../ServiceCard';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IServiceCardProps} = {};

// Cases['User is admin'] = {
//   service: {
//     id: 'role/role2/subdomain13',
//     subDomain: 'subdomain13',
//     name: 'My Test Service', 
//     shortDescription: 'My test service short description',
//     longDescription: 'My test service long description', 
//     logo: testLogo,
//     roleId: 'role2'
//   },
//   user: {
//     isLogged: true,
//     expiresAt: Date.now() + 3600000,
//     isAdmin: true,
// 	  canImpersonate:true
//   },
//   openEditModal: () => {}
// }

// Cases['User is not admin'] = {
//   service: {
//     id:'role/role1/subdomain12',
//     subDomain: 'subdomain12',
//     name: 'My Test Service', 
//     shortDescription: 'My test service short description',
//     longDescription: 'My test service long description', 
//     logo: testLogo,
//     roleId: 'role1'
//   },
//   user: {
//     isLogged: true,
//     expiresAt: Date.now() + 3600000,
//     isAdmin: false,
// 	  canImpersonate:true
//   },
//   openEditModal: () => {}
// }

export default Cases;