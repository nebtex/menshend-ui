import BackendSection, { IBackendSectionProps } from '../BackendSection';

let Cases : {[id:string]:IBackendSectionProps} = {};

Cases['Default'] = {
  codeOnChange: function() {},
  strategyOnChange: function() {},
  csrfOnChange: function() {},
  impersonateWithinRoleOnChange: function() {},
  isActiveOnChange: function() {}
}

Cases['Data defined'] = {
  strategy: 'redirect',
  impersonateWithinRole: false,
  isActive: true,
  codeOnChange: function() {},
  strategyOnChange: function() {},
  csrfOnChange: function() {},
  impersonateWithinRoleOnChange: function() {},
  isActiveOnChange: function() {}
}

Cases['Proxy as strategy'] = {
  strategy: 'proxy',
  csrf: true,
  impersonateWithinRole: false,
  isActive: true
}

export default Cases;