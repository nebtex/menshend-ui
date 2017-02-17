/// <reference types='jest' />

import * as React from 'react';
import  EditModalHeader from '../EditModalHeader';
import  Cases from './EditModalHeader.cases';
import { shallow, mount, render } from 'enzyme';

describe('EditModalHeader', () => {
  let editModalHeader:any;

  describe('No service', () => {    
    beforeEach(() => {
      editModalHeader = mount(<EditModalHeader {...Cases['No service']} />);
    });

    it('should render correctly', () => {
      expect(editModalHeader.find('h4').first().text()).toEqual('New service');
    });
  });

  describe('Service', () => {

    beforeEach(() => {
      editModalHeader = mount(<EditModalHeader {...Cases['Service']} />);
    });

    it('should render correctly', () => {
      expect(editModalHeader.find('h4').first().text()).toEqual('Edit service');
    });
  });
});
