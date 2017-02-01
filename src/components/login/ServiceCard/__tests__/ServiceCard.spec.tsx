/// <reference types='jest' />

import * as React from 'react';
import  ServiceCard from '../ServiceCard';
import  Cases from './ServiceCard.cases';
import { shallow, mount, render } from 'enzyme';

describe('ServiceCard', () => {
  let serviceCard:any;

  describe('Defined Service', () => {

    const testProps = Cases['Defined Service'];

    beforeEach(() => {
      serviceCard = mount(<ServiceCard {...testProps} />);
    });

    it('should render correctly when environment is passed via props', () => {
      expect(serviceCard.find('CardTitle').first().text()).toEqual(testProps.service.name);
      expect(serviceCard.find('CardText').first().text()).toMatch(testProps.service.short_description);
      expect(serviceCard.find('CardImg').first().props().src).toEqual(testProps.service.logo);
    });

    it('should have the expected props', () => {
      expect(serviceCard.props().service.name).toEqual(testProps.service.name);
      expect(serviceCard.props().service.short_description).toMatch(testProps.service.short_description);
      expect(serviceCard.props().service.logo).toEqual(testProps.service.logo);
      expect(serviceCard.props().service.long_description).toEqual(testProps.service.long_description);
    });
  });

  describe('Undefined Service', () => {

    let testProps = Cases['Undefined Service'];

    beforeEach(() => {
      serviceCard = mount(<ServiceCard {...Cases['Undefined Service']} />);
    });

    it('should render correctly the expected default values', () => {
      expect(serviceCard.find('CardTitle').first().text()).toEqual('Unknown');
      expect(serviceCard.find('CardText').first().text()).toEqual('Unknown service');
      expect(serviceCard.find('i').first().props().className).toEqual('fa fa-server');
    });

    it('should have default props defined', () => {
      expect(serviceCard.props().service.name).toBeDefined();
      expect(serviceCard.props().service.short_description).toBeDefined();
      expect(serviceCard.props().service.logo).toBeDefined();
      expect(serviceCard.props().service.long_description).toBeDefined();
    });
  });
});
