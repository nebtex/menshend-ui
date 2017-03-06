import EditModal, { IEditModalProps } from '../EditModal';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IEditModalProps} = {};

Cases['Default'] = {
  isOpen: true,
  toggle: function(){}
};

Cases['Service'] = {
  isOpen: true,
  toggle: function(){},
  service: {
    name: 'My Test Service', 
    short_description: 'My test service short description',
    long_description: 'My test service long description',
    subDomain: 'testSubdomain',
    logo: testLogo,
    roles: ['role 1', 'role 2', 'role 3']
  }
};

export default Cases;