import ServicesPanel, { IServicesPanelProps } from '../ServicesPanel';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IServicesPanelProps} = {};

Cases['Default'] = {
  roles:['role1', 'role2', 'role3', 'role4']
}

export default Cases;