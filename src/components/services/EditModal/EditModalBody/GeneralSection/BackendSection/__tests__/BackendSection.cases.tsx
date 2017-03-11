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
  strategy: 0,
  csrf: true,
  impersonateWithinRole: false,
  isActive: true,
  strategies: {'Proxy': 0, 'SecondStrategy': 1},
  codeOnChange: function() {},
  strategyOnChange: function() {},
  csrfOnChange: function() {},
  impersonateWithinRoleOnChange: function() {},
  isActiveOnChange: function() {}
}

export default Cases;