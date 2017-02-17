import EditModalHeader, { IEditModalHeaderProps } from '../EditModalHeader';

let Cases : {[id:string]:IEditModalHeaderProps} = {};

Cases['No service'] = {
  toggle: function(){},
  service: false
};

Cases['Service'] = {
  toggle: function(){},
  service: true
};

export default Cases;