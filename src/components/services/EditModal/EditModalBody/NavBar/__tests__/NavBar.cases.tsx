import NavBar, { INavBarProps } from '../NavBar';

let Cases : {[id:string]:INavBarProps} = {};

Cases['Default'] = {
  activeTab: 'general',
  toggleTab: function(){}
}

Cases['Proxy active'] = {
  activeTab: 'general',
  toggleTab: function(){},
  proxyActive: true
}

export default Cases;