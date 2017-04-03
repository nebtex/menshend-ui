/// <reference types='jest' />

import * as React from 'react';
import  ServiceInfoCard from '../ServiceInfoCard';
import  Cases from './ServiceInfoCard.cases';
import { shallow, mount, render } from 'enzyme';

describe('ServiceInfoCard', () => {
  let serviceInfoCard:any;

  describe('Defined Service', () => {

    const testProps = Cases['Defined Service'];

    beforeEach(() => {
      serviceInfoCard = mount(<ServiceInfoCard {...testProps} />);
    });

    it('should render correctly when environment is passed via props', () => {
      // expect(serviceInfoCard.find('CardTitle').first().text()).toEqual(testProps.service.name);
      // expect(serviceInfoCard.find('CardText').first().text()).toMatch(testProps.service.short_description);
      // expect(serviceInfoCard.find('CardImg').first().props().src).toEqual(testProps.service.logo);
    });

    it('should have the expected props', () => {
      // expect(serviceInfoCard.props().service.name).toEqual(testProps.service.name);
      // expect(serviceInfoCard.props().service.short_description).toMatch(testProps.service.short_description);
      // expect(serviceInfoCard.props().service.logo).toEqual(testProps.service.logo);
      // expect(serviceInfoCard.props().service.long_description).toEqual(testProps.service.long_description);
    });
  });

  describe('Undefined Service', () => {

    let testProps = Cases['Undefined Service'];

    beforeEach(() => {
      serviceInfoCard = mount(<ServiceInfoCard {...Cases['Undefined Service']} />);
    });

    it('should render correctly the expected default values', () => {
      expect(serviceInfoCard.find('CardTitle').first().text()).toEqual('Unknown');
      expect(serviceInfoCard.find('CardText').first().text()).toEqual('Unknown service');
      expect(serviceInfoCard.find('i').first().props().className).toEqual('fa fa-server');
    });

    it('should have default props defined', () => {
      // expect(serviceInfoCard.props().service.name).toBeDefined();
      // expect(serviceInfoCard.props().service.short_description).toBeDefined();
      // expect(serviceInfoCard.props().service.logo).toBeDefined();
      // expect(serviceInfoCard.props().service.long_description).toBeDefined();
    });
  });
});
