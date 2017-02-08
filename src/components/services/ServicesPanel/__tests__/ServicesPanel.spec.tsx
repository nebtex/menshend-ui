/// <reference types='jest' />

import * as React from 'react';
import  ServicesPanel from '../ServicesPanel';
import  Cases from './ServicesPanel.cases';
import { shallow, mount, render } from 'enzyme';

describe('ServicesPanel', () => {
  let servicesPanel:any;

  beforeEach(()=>{
    servicesPanel = mount(<ServicesPanel {...Cases['Default']}/>)
  });

  it('should render correctly', () => {
    expect(servicesPanel.find('Dropdown').length).toEqual(1);
    expect(servicesPanel.find('ServicesList').length).toEqual(1);
    expect(servicesPanel.find('Input').length).toEqual(1);
  });

  it('should render the roles dropdown with the services prop roles as items', () => {
    let roles: string[] = [];
    servicesPanel.props().services.forEach((service:any) => {
      service.roles.forEach((role:string) => {
        if (roles.indexOf(role) === -1) {
          roles.push(role);
        }
      });
    });

    servicesPanel.setState({dropdownOpen:true});
    expect(servicesPanel.find('DropdownItem .role').length).toEqual(roles.length);    
  });

  it('should render only services with the selected role', () => {

  });

  it('should render only services with the selected role when a search value is entered by user', () => {

  });

});
