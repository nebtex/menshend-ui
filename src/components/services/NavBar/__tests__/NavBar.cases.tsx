import NavBar from '../NavBar';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:any} = {};

Cases['Default'] = {
  environment: {
    name: 'Test Environment',
    short_description: 'Short Test Description',
    long_description: 'Long Test Description',
    logo: testLogo
  }
}

export default Cases;