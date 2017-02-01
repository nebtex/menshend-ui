import ServiceCard, { IServiceCardProps } from '../ServiceCard';

let Cases : {[id:string]:IServiceCardProps} = {};

Cases['Defined Service'] = {
  service: {
    name: 'My Test Service', 
    short_description: 'My test service short description',
    long_description: 'My test service long description', 
    logo: 'myTestServiceLogo.svg'
  }
}

Cases['Undefined Service'] = {};

export default Cases;