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

    it('should render all the buttons', () => {
      // expect(serviceCard.find('Button').length).toEqual(3);
    });

    it('should render correctly', () => {
      // expect(serviceCard.find('CardTitle').first().text()).toEqual(testProps.service.name);
      // expect(serviceCard.find('CardText').first().text()).toMatch(testProps.service.shortDescription);
      // expect(serviceCard.find('CardImg').first().props().src).toEqual(testProps.service.logo);
    });
  });

  describe('User is not admin', () => {

    let testProps = Cases['User is not admin'];

    beforeEach(() => {
      serviceCard = mount(<ServiceCard {...Cases['User is not admin']} />);
    });

    it('should render only "Go" button', () => {
      // expect(serviceCard.find('Button').length).toEqual(1);
      // expect(serviceCard.find('Button').first().text()).toEqual('Go');
    });
  });
});
