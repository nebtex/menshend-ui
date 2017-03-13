import BackendSection, { IBackendSectionProps } from '../BackendSection';

let Cases : {[id:string]:IBackendSectionProps} = {};

Cases['Default'] = {
  codeOnChange: function() {},
  strategyOnChange: function() {},
  csrfOnChange: function() {},
  impersonateWithinRoleOnChange: function() {},
  isActiveOnChange: function() {},
  strategies: {'Proxy': 'proxy', 'SecondStrategy': 'secondStrategy'}
}

Cases['Data defined'] = {
  strategy: 'proxy',
  csrf: true,
  impersonateWithinRole: false,
  isActive: true,
  strategies: {'Proxy': 'proxy', 'SecondStrategy': 'secondStrategy'},
  codeOnChange: function() {},
  strategyOnChange: function() {},
  csrfOnChange: function() {},
  impersonateWithinRoleOnChange: function() {},
  isActiveOnChange: function() {}
}

export default Cases;