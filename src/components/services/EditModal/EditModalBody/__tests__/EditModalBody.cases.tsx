import EditModalBody, { IEditModalBodyProps } from '../EditModalBody';

const Cases : {[id:string]:IEditModalBodyProps} = {};
const roles: string[] = ['role1', 'role2', 'role3'];

Cases['Long Description URL Active']={
  activeTab:'longDescription',
  toggleTab: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActive: true,
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  codeOnChange: jest.fn(),
  longDescriptionUrlError: false
}

Cases['Long Description URL Inactive']= {
  activeTab:'longDescription',
  toggleTab: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActive: false,
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  codeOnChange: jest.fn(),
  longDescriptionUrlError: false
}

Cases['Subdomain Error']= {
  activeTab:'general',
  toggleTab: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  codeOnChange: jest.fn(),
  longDescriptionUrlError: false
}

Cases['Name Error']= {
  activeTab:'general',
  toggleTab: jest.fn(),
  nameError: true,
  name:'',
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  codeOnChange: jest.fn(),
  longDescriptionUrlError: false
}

Cases['URL Error'] = {
  activeTab:'longDescription',
  toggleTab: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  codeOnChange: jest.fn(),
  longDescriptionUrlError: true,
  longDescriptionUrlActive: true
}

Cases['No service roles'] = {
  toggleTab: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  codeOnChange: jest.fn(),
  longDescriptionUrlError: false,
  longDescriptionUrlActive: false
}

export default Cases;