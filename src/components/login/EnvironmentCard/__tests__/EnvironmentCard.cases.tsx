import EnvironmentCard, { IEnvironmentCardProps } from '../EnvironmentCard';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IEnvironmentCardProps} = {};

Cases['Defined Environment'] = {
  environment: {
    name: 'Test Environment',
    short_description: 'Short Test Description',
    long_description: 'Long Test Description',
    logo: testLogo
  }
}

Cases['Undefined Environment'] = {};

export default Cases;