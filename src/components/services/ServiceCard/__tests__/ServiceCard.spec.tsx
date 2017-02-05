/// <reference types='jest' />

import * as React from 'react';
import  ServiceCard from '../ServiceCard';
import  Cases from './ServiceCard.cases';
import { shallow, mount, render } from 'enzyme';

describe('ServiceCard', () => {
  let serviceCard:any;

  describe('User is admin', () => {

    const testProps = Cases['User is admin'];

    beforeEach(() => {
      serviceCard = mount(<ServiceCard {...testProps} />);
    });

    it('should render correctly when user prop is admin', () => {
      
    });
  });

  describe('User is not admin', () => {

    let testProps = Cases['User is not admin'];

    beforeEach(() => {
      serviceCard = mount(<ServiceCard {...Cases['User is not admin']} />);
    });

    it('should render correctly when user prop is admin', () => {
    
    });
  });
});
