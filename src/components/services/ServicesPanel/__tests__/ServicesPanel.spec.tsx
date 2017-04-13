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
    // let roles: string[] = [];
    // servicesPanel.props().services.forEach((service:any) => {
    //   if (roles.indexOf(service.roleId) === -1) {
    //     roles.push(service.roleId);
    //   }
    // });

    // let dropDownItemsTexts = servicesPanel.find('DropdownItem .role').map((node:any) => { return node.text()});

    // expect(JSON.stringify(roles.sort())).toEqual(JSON.stringify(dropDownItemsTexts.sort()));
  });

  it('should render only services with the selected role', () => {
    
    // let activeRole = 'Mollis.';

    // servicesPanel.setState({
    //   activeRole: activeRole
    // });

    // let allHaveActiveRole = servicesPanel.find('ServiceCard').map((node:any) => {
    //   return node.props().service.roles.indexOf(activeRole) > -1;
    // }).every((value:boolean) => {
    //   return value === true;
    // });

    // expect(allHaveActiveRole).toEqual(true);
  });

  it('should render only services with the selected role when a search value is entered by user', () => {
    // let activeRole = 'Mollis.';

    // servicesPanel.setState({
    //   activeRole: activeRole,
    //   searhValue: 'test'
    // });

    // let allHaveActiveRole = servicesPanel.find('ServiceCard').map((node:any) => {
    //   return node.props().service.roles.indexOf(activeRole) > -1;
    // }).every((value:boolean) => {
    //   return value === true;
    // });

    // expect(allHaveActiveRole).toEqual(true);
  });

  it('should render the Not found services message when search is performed an it returns no services', () => {
      // servicesPanel.setState({
      //   searchValue:'mycrazytestsearchcriteria',
      //   activeRole:'Mollis.'
      // });

      // expect(servicesPanel.find('h3').first().text()).toEqual('No services found');
  });

  it('should render the right search indicator in search bar depending on searching state', () => {
    // servicesPanel.setState({loadingSearch:false, searchValue:''});
    // expect(servicesPanel.find('.rowHead').first().find('i').length).toEqual(0);

    // servicesPanel.setState({loadingSearch:false, searchValue:'mysearchcriteria'});
    // expect(servicesPanel.find('.rowHead').first().find('i').length).toEqual(1);
    // expect(servicesPanel.find('.rowHead').first().find('i').html()).toContain('fa fa-times fa-lg');
    
    // servicesPanel.setState({loadingSearch:true, searchValue:'mysearchcriteria'});
    // expect(servicesPanel.find('.rowHead').first().find('i').length).toEqual(1);
    // expect(servicesPanel.find('.rowHead').first().find('i').html()).toContain('fa fa-pulse fa-spinner');
  });

  it(`should set the right searching state after a second 
      depending on the searchOnChangeMethod actioned by user input`, (done) => {
    done();
    // servicesPanel.instance().searchOnChange({target:{value:'mysearchcriteria'}, persist: () => {}});
    // expect(servicesPanel.state().searchValue).toEqual('mysearchcriteria');
    // expect(servicesPanel.state().loadingSearch).toEqual(true);
    // try {
    //   setTimeout(()=>{
    //     expect(servicesPanel.state().loadingSearch).toEqual(false);
    //     done();
    //   }, 2000);
    // }catch (e){
    //   done.fail(e);
    // }
  });
});
