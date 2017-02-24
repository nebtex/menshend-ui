/// <reference types='jest' />
import * as React from 'react';
import EditModalBody from '../EditModalBody';
import Cases from './EditModalBody.cases';
import { shallow, mount, render } from 'enzyme';

describe('EditModalBody', () => {
  let editModalBody:any;

  describe('Long Description URL Active', () => {
    beforeEach(()=> {
      editModalBody = mount(<EditModalBody {...Cases['Long Description URL Active']}/>)
    });

    it('should render correctly', () => {
      expect(editModalBody.find('.longDescriptionTextArea').first().props().disabled).toEqual(true);
      expect(editModalBody.find('.longDescriptionUrlCheckbox').first().props().checked).toEqual(true);
      expect(editModalBody.find('.longDescriptionUrlInput').first().props().disabled).toEqual(false);
    });
  });

  describe('Long Description URL Inactive', () => {
    beforeEach(()=> {
      editModalBody = mount(<EditModalBody {...Cases['Long Description URL Inactive']}/>)
    });

    it('should render correctly', () => {
      expect(editModalBody.find('.longDescriptionTextArea').first().props().disabled).toEqual(false);
      expect(editModalBody.find('.longDescriptionUrlCheckbox').first().props().checked).toEqual(false);
      expect(editModalBody.find('.longDescriptionUrlInput').first().props().disabled).toEqual(true);
    });
  });

  describe('Name Error', () => {
    beforeEach(()=> {
      editModalBody = mount(<EditModalBody {...Cases['Name Error']}/>)
    });

    it('should render correctly', () => {
      expect(editModalBody.find('FormGroup').at(1).props().color).toEqual('danger');
      expect(editModalBody.find('FormGroup').at(1).find('Input').first().props().state).toEqual('danger');
      expect(editModalBody.find('FormGroup').at(1).find('FormFeedback').first().text()).toEqual('This field is required');
    });
  });

  describe('URL Error', () => {
    beforeEach(()=> {
      editModalBody = mount(<EditModalBody {...Cases['URL Error']}/>)
    });

    it('should render correctly', () => {
      expect(editModalBody.find('.longDescriptionUrlFormGroup').first().html()).toContain('danger');
      expect(editModalBody.find('.longDescriptionUrlFormGroup').first().find('input').html()).toContain('danger');
      expect(editModalBody.find('.longDescriptionUrlFormGroup').first().html()).toContain('Please enter a valid URL');
    });
  });

  describe('Subdomain Error', () => {
    beforeEach(()=> {
      editModalBody = mount(<EditModalBody {...Cases['Subdomain Error']}/>)
    });

    it('should render correctly', () => {
      expect(editModalBody.find('FormGroup').at(0).props().color).toEqual('danger');
      expect(editModalBody.find('FormGroup').at(0).find('Input').first().props().state).toEqual('danger');
      expect(editModalBody.find('FormGroup').at(0).find('FormFeedback').first().text()).toEqual('This field is required');
    });
  });

  describe('No service roles', () => {
    beforeEach(()=> {
      editModalBody = mount(<EditModalBody {...Cases['No service roles']}/>)
    });

    it('should render correctly', () => {
      expect(editModalBody.find('.codeEditorNoRoles').text()).toEqual('Please pick/create a role before writing the proxy logic');
    });
  });
});