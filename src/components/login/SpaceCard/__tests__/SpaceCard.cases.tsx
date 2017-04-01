import SpaceCard, { ISpaceCardProps } from '../SpaceCard';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:ISpaceCardProps} = {};

Cases['Defined Space'] = {
  space: {
    name: 'Test Environment',
    shortDescription: 'Short Test Description',
    longDescription: 'Long Test Description',
    logo: testLogo
  }
}

Cases['Undefined Space'] = {};

export default Cases;