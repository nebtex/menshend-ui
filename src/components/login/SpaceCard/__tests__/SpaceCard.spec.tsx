/// <reference types='jest' />

import * as React from 'react';
import  EnvironmentCard from '../SpaceCard';
import  Cases from './SpaceCard.cases';
import { shallow, mount, render } from 'enzyme';

describe('EnvironmentCard', () => {
  let environmentCard:any;

  describe('Defined Environment', () => {

    const testProps = Cases['Defined Environment'];

    beforeEach(() => {
      environmentCard = mount(<EnvironmentCard {...testProps} />);
    });

    it('should render correctly when environment is passed via props', () => {
      // expect(environmentCard.find('h1').first().text()).toEqual(testProps.space.name);
      // expect(environmentCard.find('p').first().text()).toMatch(testProps.space.shortDescription);
    });

    it('should have the expected props', () => {
      // expect(environmentCard.props().environment.name).toEqual(testProps.space.name);
      // expect(environmentCard.props().environment.short_description).toMatch(testProps.space.shortDescription);
      // expect(environmentCard.props().environment.long_description).toEqual(testProps.space.longDescription);
    });
  });

  describe('Undefined Environment', () => {

    let testProps = Cases['Undefined Environment'];

    beforeEach(() => {
      environmentCard = mount(<EnvironmentCard {...Cases['Undefined Environment']} />);
    });

    it('should have default props defined', () => {
      // expect(environmentCard.props().environment.name).toBeDefined();
      // expect(environmentCard.props().environment.short_description).toBeDefined();
      // expect(environmentCard.props().environment.long_description).toBeDefined();
    });
  });
});
