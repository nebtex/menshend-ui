/// <reference types='jest' />

import * as React from 'react';
import  BackendSection from '../BackendSection';
import  Cases from './BackendSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('BackendSection', () => {
  let backendSection:any;
  let strategyOnChangeMock:any;
  let csrfOnChangeMock:any;
  let impersonateWithinRoleOnChangeMock:any;
  let isActiveOnChangeMock:any;
  let codeLanguageOnChangeMock:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      strategyOnChangeMock = jest.fn();
      csrfOnChangeMock = jest.fn();
      impersonateWithinRoleOnChangeMock = jest.fn();
      isActiveOnChangeMock = jest.fn();
      codeLanguageOnChangeMock = jest.fn();
      backendSection = mount(
        <BackendSection 
          {...testProps}
          strategyOnChange = {strategyOnChangeMock}
          csrfOnChange = {csrfOnChangeMock}
          impersonateWithinRoleOnChange = {impersonateWithinRoleOnChangeMock}
          isActiveOnChange = {isActiveOnChangeMock}
          codeLanguageOnChange = {codeLanguageOnChangeMock}
      />);
    });

    it("should render correctly", () => {
      expect(backendSection.find('FormGroup').length).toEqual(5);
      expect(backendSection.find('MonacoEditor').length).toEqual(1);
    });

    it("should call the csrfOnChange prop when specified action is performed" ,() => {
      const checkbox = backendSection.find('Input').first();
      checkbox.simulate('change');
      expect(csrfOnChangeMock).toBeCalled();
    });

    it("should call the impersonateWithinRoleOnChange prop when specified action is performed" ,() => {
      const checkbox = backendSection.find('Input').at(1);
      checkbox.simulate('change');
      expect(impersonateWithinRoleOnChangeMock).toBeCalled();
    });

    it("should call the isActiveOnChange prop when specified action is performed" ,() => {
      const checkbox = backendSection.find('Input').at(2);
      checkbox.simulate('change');
      expect(isActiveOnChangeMock).toBeCalled();
    });
  
    it("should call the strategyOnChange prop when specified action is performed" ,() => {
      const dropdownItem = backendSection.find('DropdownItem').first();
      dropdownItem.simulate('click');
      expect(strategyOnChangeMock).toBeCalled();
    });

    it("should call the codeLanguageOnChange prop when specified action is performed" ,() => {
      const dropdownItem = backendSection.find('Dropdown').at(1).find('.dropdown-item').first();
      dropdownItem.simulate('click');
      expect(codeLanguageOnChangeMock).toBeCalled();
    });
  });

  describe('Data defined', () => {

    const testProps = Cases['Data defined'];

    beforeEach(() => {
      backendSection = mount(<BackendSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(backendSection.find('Input').at(0).props().checked).toEqual(Cases['Data defined'].impersonateWithinRole);
      expect(backendSection.find('Input').at(1).props().checked).toEqual(Cases['Data defined'].isActive);
    });
  });

  describe('Proxy as strategy', () => {
    it("should render the csrf formgroup", () => {   
    });
  });
});
