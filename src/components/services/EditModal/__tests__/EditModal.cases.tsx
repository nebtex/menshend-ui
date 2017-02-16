import EditModal, { IEditModalProps } from '../EditModal';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IEditModalProps} = {};

Cases['No service'] = {
  isOpen: true,
  toggle: function(){},
  roles: ['role 1', 'role 2', 'role 3']
};

export default Cases;