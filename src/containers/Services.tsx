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
    "name": "Pancast",
    "short_description": "short description Amet curabitur commodo eget orci. Fringilla nunc pellentesque at aenean.",
    "long_description": "long description Velit mi condimentum proin lacinia risus aenean posuere ultricies. Vestibulum dictum hendrerit placerat nulla id. Commodo turpis ornare bibendum blandit bibendum adipiscing lacus cursus, consectetur bibendum vehicula purus tortor au.",
    "logo": "http://placehold.it/64x64",
    "roles": [
        "Arcu.",
        "Proin.",
        "Fringilla."
    ]
  },
  {
    "name": "MultiServ",
    "short_description": "short description Vehicula sit ac proin eget non, lacus mauris tempus magna.",
    "long_description": "long description Pretium mollis augue justo iaculis, faucibus lacus dui mattis. Pellentesque cursus quisque augue a. Accumsan vulputate sit iaculis vestibulum suscipit, eget viverra quis finibus non mi tempus mauris amet nisi.",
    "logo": "http://placehold.it/64x64",
    "roles": [
        "Ante.",
        "Felis.",
        "Sem."
    ]
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