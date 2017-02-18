import EditModal, { IEditModalProps } from '../EditModal';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IEditModalProps} = {};

Cases['No service'] = {
  isOpen: true,
  toggle: function(){},
  roles: ['role 1', 'role 2', 'role 3', 'role 4', 'role 5', 'role 6', 'role 7', 'role 8']
};

export default Cases;