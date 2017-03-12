/// <reference types='jest' />

import * as React from 'react';
import  GeneralSection from '../GeneralSection';
import  Cases from './GeneralSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('GeneralSection', () => {
  let generalSection:any;
  let nameOnChangeMock:any;
  let logoOnChangeMock:any;
  let subdomainOnChangeMock:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      nameOnChangeMock = jest.fn();
      logoOnChangeMock = jest.fn();
      subdomainOnChangeMock = jest.fn();
      generalSection = mount(
        <GeneralSection 
          {...testProps} 
          nameOnChange={nameOnChangeMock}
          logoOnChange={logoOnChangeMock} 
          subdomainOnChange={subdomainOnChangeMock}/>
      );
    });

    it("should render correctly", () => {
      expect(generalSection.find('BackendSection').length).toEqual(1);
    });

    it("should call the nameOnChange prop when specified action is performed" ,() => {
      const nameInput = generalSection.find('Input').first();
      nameInput.simulate('change');
      expect(nameOnChangeMock).toBeCalled();
    });

    it("should call the subdomainOnChange prop when specified action is performed" ,() => {
      const subdomainInput = generalSection.find('Input').at(1);
      subdomainInput.simulate('change');
      expect(subdomainOnChangeMock).toBeCalled();
    });

    it("should call the logoOnChange prop when specified action is performed" ,() => {
      const logoInput = generalSection.find('Input').at(2);
      logoInput.simulate('change');
      expect(logoOnChangeMock).toBeCalled();
    });
  });

  describe('Data defined', () => {

    const testProps = Cases['Data defined'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(generalSection.find('Input').first().props().value).toEqual(Cases['Data defined'].name);
      expect(generalSection.find('Input').at(1).props().value).toEqual(Cases['Data defined'].subdomain);      
      expect(generalSection.find('Input').at(2).props().value).toEqual(Cases['Data defined'].logo);
    });
  });

  describe('Name error', () => {

    const testProps = Cases['Name error'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(generalSection.find('FormGroup').first().props().color).toEqual('danger');
      expect(generalSection.find('Input').first().props().state).toEqual('danger');
    });
  });

  describe('Subdomain error', () => {

    const testProps = Cases['Subdomain error'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(generalSection.find('FormGroup').at(1).props().color).toEqual('danger');
      expect(generalSection.find('Input').at(1).props().state).toEqual('danger');
    });
  });

  describe('Logo error', () => {

    const testProps = Cases['Logo error'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(generalSection.find('img').first().props().src).toEqual('https://placehold.it/64x64');      
    });
  });
});
