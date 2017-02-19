import SessionCounter, { ISessionCounterProps } from '../SessionCounter';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:ISessionCounterProps} = {};

Cases['Expired'] = {
  expiresAt : Date.now()
};

Cases['Non expired'] = {
  expiresAt : Date.now() + 36000000
};
export default Cases;