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
  isActiveOnChange: function(){},
  subdomainOnChange: function(){}
}

Cases['Data defined'] = {
  name: 'service-name',
  logo: testLogo,
  subdomain: 'test-subdomain',
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  codeOnChange: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){},
  subdomainOnChange: function(){}
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
  isActiveOnChange: function(){},
  subdomainOnChange: function(){}
}

Cases['Subdomain error'] = {
  subdomain: '',
  subdomainError: true,
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  codeOnChange: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){},
  subdomainOnChange: function(){}
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
  isActiveOnChange: function(){},
  subdomainOnChange: function(){}
}

export default Cases;