/// <reference types='jest' />

import * as React from 'react';
import  ServiceInfoCard from '../ServiceInfoCard';
import  Cases from './ServiceInfoCard.cases';
import { shallow, mount, render } from 'enzyme';

describe('ServiceInfoCard', () => {
  let ServiceInfoCard:any;

  describe('Defined Service', () => {

    const testProps = Cases['Defined Service'];

    beforeEach(() => {
      ServiceInfoCard = mount(<ServiceInfoCard {...testProps} />);
    });

    it('should render correctly when environment is passed via props', () => {
      expect(ServiceInfoCard.find('CardTitle').first().text()).toEqual(testProps.service.name);
      expect(ServiceInfoCard.find('CardText').first().text()).toMatch(testProps.service.short_description);
      expect(ServiceInfoCard.find('CardImg').first().props().src).toEqual(testProps.service.logo);
    });

    it('should have the expected props', () => {
      expect(ServiceInfoCard.props().service.name).toEqual(testProps.service.name);
      expect(ServiceInfoCard.props().service.short_description).toMatch(testProps.service.short_description);
      expect(ServiceInfoCard.props().service.logo).toEqual(testProps.service.logo);
      expect(ServiceInfoCard.props().service.long_description).toEqual(testProps.service.long_description);
    });
  });

  describe('Undefined Service', () => {

    let testProps = Cases['Undefined Service'];

    beforeEach(() => {
      ServiceInfoCard = mount(<ServiceInfoCard {...Cases['Undefined Service']} />);
    });

    it('should render correctly the expected default values', () => {
      expect(ServiceInfoCard.find('CardTitle').first().text()).toEqual('Unknown');
      expect(ServiceInfoCard.find('CardText').first().text()).toEqual('Unknown service');
      expect(ServiceInfoCard.find('i').first().props().className).toEqual('fa fa-server');
    });

    it('should have default props defined', () => {
      expect(ServiceInfoCard.props().service.name).toBeDefined();
      expect(ServiceInfoCard.props().service.short_description).toBeDefined();
      expect(ServiceInfoCard.props().service.logo).toBeDefined();
      expect(ServiceInfoCard.props().service.long_description).toBeDefined();
    });
  });
});
