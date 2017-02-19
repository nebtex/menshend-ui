import EditModal, { IEditModalProps } from '../EditModal';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IEditModalProps} = {};

Cases['Default'] = {
  isOpen: true,
  toggle: function(){},
  roles: ['role 1', 'role 2', 'role 3', 'role 4', 'role 5', 'role 6', 'role 7', 'role 8']
};

Cases['Service'] = {
  isOpen: true,
  toggle: function(){},
  roles: ['role 1', 'role 2', 'role 3', 'role 4', 'role 5', 'role 6', 'role 7', 'role 8'],
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