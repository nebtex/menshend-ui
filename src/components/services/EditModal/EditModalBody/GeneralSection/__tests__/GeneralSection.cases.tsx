import GeneralSection, { IGeneralSectionProps } from '../GeneralSection';
let testLogo = require('../../../../../../assets/testLogo.svg');
let Cases : {[id:string]:IGeneralSectionProps} = {};

Cases['Default'] = {
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  codeOnChange: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){}
}

Cases['Data defined'] = {
  name: 'service-name',
  logo: testLogo,
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  codeOnChange: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){}
}

Cases['Name error'] = {
  name: '',
  nameError: true,
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  codeOnChange: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){}
}

Cases['Logo error'] = {
  logo: '',
  logoError: true,
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  codeOnChange: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){}
}

export default Cases;