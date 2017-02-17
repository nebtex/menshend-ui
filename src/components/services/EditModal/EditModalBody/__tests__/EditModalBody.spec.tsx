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
      
    });
  });

  describe('Long Description URL Active', () => {
    beforeEach(()=> {
      editModalBody = mount(<EditModalBody {...Cases['Subdomain Error']}/>)
    });

    it('should render correctly', () => {
      
    });
  });
});