import EditModalBody, { IEditModalBodyProps } from '../EditModalBody';

const Cases : {[id:string]:IEditModalBodyProps} = {};
const roles: string[] = ['role1', 'role2', 'role3'];

Cases['Long Description URL Active']={
  activeTab:'longDescription',
  toggleTab: function(){},
  selectRole: function(){},
  subdomainOnChange: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActive: true,
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  roles: roles,
  codeOnChange: function(){}
}

Cases['Long Description URL Inactive']= {
  activeTab:'longDescription',
  toggleTab: function(){},
  selectRole: function(){},
  subdomainOnChange: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActive: false,
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  roles: roles,
  codeOnChange: function(){}
}

Cases['Subdomain Error']= {
  activeTab:'general',
  toggleTab: function(){},
  selectRole: function(){},
  subdomainError: true,
  subdomainOnChange: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  roles: roles,
  codeOnChange: function(){}
}

Cases['Name Error']= {
  activeTab:'general',
  toggleTab: function(){},
  selectRole: function(){},
  subdomainOnChange: function(){},
  nameError: true,
  name:'',
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  roles: roles,
  codeOnChange: function(){}
}

export default Cases;