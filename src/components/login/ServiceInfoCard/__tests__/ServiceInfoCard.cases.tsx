import ServiceInfoCard, { IServiceInfoCardProps } from '../ServiceInfoCard';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IServiceInfoCardProps} = {};

Cases['Defined Service'] = {
  service: {
    name: 'My Test Service', 
    short_description: 'My test service short description',
    long_description: 'My test service long description', 
    logo: testLogo
  }
}

Cases['Undefined Service'] = {};

export default Cases;