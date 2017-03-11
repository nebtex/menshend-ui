import NavBar, { INavBarProps } from '../NavBar';

let Cases : {[id:string]:INavBarProps} = {};

Cases['Default'] = {
  activeTab: 'general',
  toggleTab: function(){}
}

export default Cases;