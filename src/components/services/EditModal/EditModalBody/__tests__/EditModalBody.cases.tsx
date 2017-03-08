/// <reference types='jest' />
import EditModalBody, { IEditModalBodyProps } from '../EditModalBody';

const Cases : {[id:string]:IEditModalBodyProps} = {};
const roles: string[] = ['role1', 'role2', 'role3'];

Cases['Long Description URL Active']={
  activeTab:'longDescription',
  toggleTab: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActive: true,
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  codeOnChange: function(){},
  longDescriptionUrlError: false
}

Cases['Long Description URL Inactive']= {
  activeTab:'longDescription',
  toggleTab: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActive: false,
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  codeOnChange: function(){},
  longDescriptionUrlError: false
}

Cases['Subdomain Error']= {
  activeTab:'general',
  toggleTab: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  codeOnChange: function(){},
  longDescriptionUrlError: false
}

Cases['Name Error']= {
  activeTab:'general',
  toggleTab: function(){},
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
  codeOnChange: function(){},
  longDescriptionUrlError: false
}

Cases['URL Error'] = {
  activeTab:'longDescription',
  toggleTab: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  codeOnChange: function(){},
  longDescriptionUrlError: true,
  longDescriptionUrlActive: true
}

Cases['No service roles'] = {
  toggleTab: function(){},
  nameOnChange: function(){},
  logoOnError: function(){},
  logoOnChange: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActiveOnChange:function(){},
  toggleDropdown: function(){},
  codeOnChange: function(){},
  longDescriptionUrlError: false,
  longDescriptionUrlActive: false
}

export default Cases;