/// <reference types='jest' />

import * as React from 'react';
import  CorsSection from '../CorsSection';
import  Cases from './CorsSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('CorsSection', () => {
  let corsSection:any;
  let allowCredentialsOnChangeMock:any;
  let optionsPassthroughOnChangeMock:any;
  let maxAgeOnChangeMock:any;
  let handleAllowedHeadersAddMock:any;
  let handleAllowedHeadersDeleteMock:any;
  let handleAllowedMethodsAddMock:any;
  let handleAllowedMethodsDeleteMock:any;
  let handleAllowedOriginsAddMock:any;
  let handleAllowedOriginsDeleteMock:any;
  let handleExposedHeadersAddMock:any;
  let handleExposedHeadersDeleteMock:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      allowCredentialsOnChangeMock = jest.fn();
      optionsPassthroughOnChangeMock = jest.fn();
      maxAgeOnChangeMock = jest.fn();
      handleAllowedHeadersAddMock = jest.fn();
      handleAllowedMethodsAddMock = jest.fn();
      handleAllowedOriginsAddMock = jest.fn();
      handleExposedHeadersAddMock = jest.fn();

      corsSection = mount(
        <CorsSection 
          {...testProps} 
          allowCredentialsOnChange={allowCredentialsOnChangeMock}
          optionsPassthroughOnChange={optionsPassthroughOnChangeMock}
          maxAgeOnChange={maxAgeOnChangeMock}
          handleAllowedHeadersAdd={handleAllowedHeadersAddMock}
          handleAllowedMethodsAdd={handleAllowedMethodsAddMock}
          handleAllowedOriginsAdd={handleAllowedOriginsAddMock}
          handleExposedHeadersAdd={handleExposedHeadersAddMock} />
      );
    });

    it("should render correctly", () => {
      expect(corsSection.find('Input').first().props().type).toEqual('checkbox');
      expect(corsSection.find('Input').at(1).props().type).toEqual('checkbox');
      expect(corsSection.find('Input').at(2).props().type).toEqual('checkbox');
      expect(corsSection.find('EditableList').length).toEqual(4);
    });

    it("should call allowCredentialsOnChange when corresponding action is called ", () => {
      let checkbox = corsSection.find('Input').first();
      checkbox.simulate('change');
      expect(allowCredentialsOnChangeMock).toBeCalled();
    });

    it("should call optionsPassthroughOnChange when corresponding action is called ", () => {
      let checkbox = corsSection.find('Input').at(1);
      checkbox.simulate('change');
      expect(optionsPassthroughOnChangeMock).toBeCalled();
    });
    
    it("should call maxAgeOnChange when corresponding action is called ", () => {
      let checkbox = corsSection.find('Input').at(2);
      checkbox.simulate('change');
      expect(maxAgeOnChangeMock).toBeCalled();
    });

    it("should call handleAllowedOriginsAdd when corresponding action is called ", () => {
      let addButton = corsSection.find('Button').first();
      addButton.simulate('click');
      expect(handleAllowedOriginsAddMock).toBeCalled();
    });

    it("should call handleAllowedMethodsAdd when corresponding action is called ", () => {
      let addButton = corsSection.find('Button').at(1);
      addButton.simulate('click');
      expect(handleAllowedMethodsAddMock).toBeCalled();
    });

    it("should call handleAllowedHeadersAdd when corresponding action is called ", () => {
      let addButton = corsSection.find('Button').at(2);
      addButton.simulate('click');
      expect(handleAllowedHeadersAddMock).toBeCalled();
    });

    it("should call handleExposedHeadersAdd when corresponding action is called ", () => {
      let addButton = corsSection.find('Button').at(3);
      addButton.simulate('click');
      expect(handleExposedHeadersAddMock).toBeCalled();
    });
  });

  describe('Data defined', () => {
    const testProps = Cases['Data defined'];

    beforeEach(() => {
      allowCredentialsOnChangeMock = jest.fn();
      optionsPassthroughOnChangeMock = jest.fn();
      maxAgeOnChangeMock = jest.fn();
      handleAllowedHeadersDeleteMock = jest.fn();
      handleAllowedMethodsDeleteMock = jest.fn();
      handleAllowedOriginsDeleteMock = jest.fn();
      handleExposedHeadersDeleteMock = jest.fn();

      corsSection = mount(
        <CorsSection 
          {...testProps} 
          allowCredentialsOnChange={allowCredentialsOnChangeMock}
          optionsPassthroughOnChange={optionsPassthroughOnChangeMock}
          maxAgeOnChange={maxAgeOnChangeMock}
          handleAllowedHeadersDelete={handleAllowedHeadersDeleteMock}
          handleAllowedMethodsDelete={handleAllowedMethodsDeleteMock}
          handleAllowedOriginsDelete={handleAllowedOriginsDeleteMock}
          handleExposedHeadersDelete={handleExposedHeadersDeleteMock} />
      );
    });

    it("should render correctly", () => {
      expect(corsSection.find('Input').first().props().checked).toEqual(Cases['Data defined'].cors.allowCredentials);
      expect(corsSection.find('Input').at(1).props().checked).toEqual(Cases['Data defined'].cors.optionsPassthrough);
      expect(corsSection.find('Input').at(2).props().checked).toEqual(Cases['Data defined'].cors.maxAge);
      expect(JSON.stringify(corsSection.find('EditableList').first().props().items)).toEqual(JSON.stringify(Cases['Data defined'].cors.allowedOrigins));
      expect(JSON.stringify(corsSection.find('EditableList').at(1).props().items)).toEqual(JSON.stringify(Cases['Data defined'].cors.allowedMethods));
      expect(JSON.stringify(corsSection.find('EditableList').at(2).props().items)).toEqual(JSON.stringify(Cases['Data defined'].cors.allowedHeaders));
      expect(JSON.stringify(corsSection.find('EditableList').at(3).props().items)).toEqual(JSON.stringify(Cases['Data defined'].cors.exposedHeaders));
    });

    it("should call handleAllowedOriginsDelete when corresponding action is called ", () => {
      let deleteButton = corsSection.find('EditableList').first().find('.deleteButton').first();
      deleteButton.simulate('click');
      expect(handleAllowedOriginsDeleteMock).toBeCalled();
    });

    it("should call handleAllowedMethodsDelete when corresponding action is called ", () => {
      let deleteButton = corsSection.find('EditableList').at(1).find('.deleteButton').first();
      deleteButton.simulate('click');
      expect(handleAllowedMethodsDeleteMock).toBeCalled();
    });

    it("should call handleAllowedHeadersDelete when corresponding action is called ", () => {
      let deleteButton = corsSection.find('EditableList').at(2).find('.deleteButton').first();
      deleteButton.simulate('click');
      expect(handleAllowedHeadersDeleteMock).toBeCalled();
    });

    it("should call handleExposedHeadersDelete when corresponding action is called ", () => {
      let deleteButton = corsSection.find('EditableList').at(3).find('.deleteButton').first();
      deleteButton.simulate('click');
      expect(handleExposedHeadersDeleteMock).toBeCalled();
    });
  });
});
