import * as React from 'react';
import NavBar from '../components/services/NavBar/NavBar';
import ServicesPanel from '../components/services/ServicesPanel/ServicesPanel';

const mockEnvironment = { 
  name:'Kuper', 
  short_description: 'short description',
  long_description: 'long_description',
  logo:''
};

const mockServices = [
  {
    id: 'role/role2/subdomain13',
    subDomain: 'subdomain13',
    name: 'My Test Service', 
    shortDescription: 'My test service short description',
    longDescription: 'My test service long description', 
    logo: "http://placehold.it/64x64",
    roleId: 'role2'
  },
  {
    id: 'role/role2/subdomain13',
    subDomain: 'subdomain13',
    name: 'My Test Service', 
    shortDescription: 'My test service short description',
    longDescription: 'My test service long description', 
    logo: "http://placehold.it/64x64",
    roleId: 'role2'
  }
];

const mockUser = {
  isLogged: true,
  expiresAt: Date.now() + 3600000,
  isAdmin: true,
  canImpersonate:true
}

interface IServicesProps {
  params: any;
}

export default class Services extends React.Component<IServicesProps, {}>{
  render(){
    const { role, subdomain } = this.props.params;

    return (
      <div>
        <NavBar environment={mockEnvironment}/>
        <ServicesPanel 
          services = {mockServices}
          user = {mockUser}
          activeRole = {role}
        />
        {this.props.children}
      </div>
    );
  }
}