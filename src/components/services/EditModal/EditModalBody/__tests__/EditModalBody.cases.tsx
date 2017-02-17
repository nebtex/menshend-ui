import EditModalBody, { IEditModalBodyProps } from '../EditModalBody';

const Cases : {[id:string]:IEditModalBodyProps} = {};
const roles: string[] = ['role1', 'role2', 'role3'];

Cases['Long Description URL Active']={
  activeTab:'longDescription',
  toggleTab: jest.fn(),
  selectRole: jest.fn(),
  subdomainOnChange: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActive: true,
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  roles: roles,
  codeOnChange: jest.fn()
}

Cases['Long Description URL Inactive']= {
  activeTab:'longDescription',
  toggleTab: jest.fn(),
  selectRole: jest.fn(),
  subdomainOnChange: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActive: false,
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  roles: roles,
  codeOnChange: jest.fn()
}

Cases['Subdomain Error']= {
  activeTab:'general',
  toggleTab: jest.fn(),
  selectRole: jest.fn(),
  subdomainError: true,
  subdomainOnChange: jest.fn(),
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  roles: roles,
  codeOnChange: jest.fn()
}

Cases['Name Error']= {
  activeTab:'general',
  toggleTab: jest.fn(),
  selectRole: jest.fn(),
  subdomainOnChange: jest.fn(),
  nameError: true,
  nameOnChange: jest.fn(),
  logoOnError: jest.fn(),
  logoOnChange: jest.fn(),
  shortDescriptionOnChange: jest.fn(),
  longDescriptionOnChange: jest.fn(),
  longDescriptionUrlOnChange: jest.fn(),
  longDescriptionUrlActiveOnChange:jest.fn(),
  toggleDropdown: jest.fn(),
  roles: roles,
  codeOnChange: jest.fn()
}

export default Cases;