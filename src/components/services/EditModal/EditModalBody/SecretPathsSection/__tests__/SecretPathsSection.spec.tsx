/// <reference types='jest' />

import * as React from 'react';
import  SecretPathsSection from '../SecretPathsSection';
import  Cases from './SecretPathsSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('SecretPathsSection', () => {
  let secretPathsSection:any;
  let handleSecretPathAddMock: any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      handleSecretPathAddMock = jest.fn();
      secretPathsSection = mount(
        <SecretPathsSection
          {...testProps}
          handleSecretPathsAdd={handleSecretPathAddMock}
        />);
    });

    it("should render correctly", () => {
      expect(secretPathsSection.find('EditableList').length).toEqual(1);
    });

    it("should call the handleSecretPathAdd prop when specified action is performed" ,() => {
      let addButton = secretPathsSection.find('Button').at(0);
      addButton.simulate('click');
      expect(handleSecretPathAddMock).toBeCalled();
    });
  });

  describe('Data defined', () => {

    const testProps = Cases['Data defined'];
    let handleSecretPathDeleteMock: any;

    beforeEach(() => {
      handleSecretPathDeleteMock = jest.fn();
      secretPathsSection = mount(
        <SecretPathsSection 
          {...testProps}
          handleSecretPathsDelete={handleSecretPathDeleteMock}          
        />);
    });

    it("should render correctly", () => {
      expect(JSON.stringify(secretPathsSection.find('EditableList').props().items)).toEqual(JSON.stringify(Cases['Data defined'].secretPaths);
    });

    it("should call the handleSecretPathDelete prop when specified action is performed" ,() => {
      let deleteButton = secretPathsSection.find('EditableList').at(0).find('.deleteButton').first();
      deleteButton.simulate('click');
      expect(handleSecretPathDeleteMock).toBeCalled();
    });
  });

});
