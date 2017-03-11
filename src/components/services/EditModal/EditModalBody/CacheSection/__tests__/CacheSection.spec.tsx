/// <reference types='jest' />

import * as React from 'react';
import  CacheSection from '../CacheSection';
import  Cases from './CacheSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('CacheSection', () => {
  let cacheSection:any;
  let ttlOnChangeMock: any;
  let cacheActiveOnChangeMock: any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      ttlOnChangeMock = jest.fn();
      cacheActiveOnChangeMock = jest.fn();

      cacheSection = mount(
        <CacheSection 
          {...testProps} 
          ttlOnChange={ttlOnChangeMock} 
          cacheActiveOnChange={cacheActiveOnChangeMock} />
      );
    });

    it("should render correctly", () => {
      expect(cacheSection.find('Input').first().props().type).toEqual('checkbox');
      expect(cacheSection.find('Input').at(1).props().type).toEqual('number');
    });

    it("should call cacheActiveOnChange prop when specified action is called", () => {
      const checkbox = cacheSection.find('Input').first();
      checkbox.simulate('change');
      expect(cacheActiveOnChangeMock).toBeCalled();
    });

    it("should call ttlOnChange prop when specified action is called", () => {
      const inputNumber = cacheSection.find('Input').at(1);
      inputNumber.simulate('change');
      expect(ttlOnChangeMock).toBeCalled();
    });
  });

  describe('Cache defined', () => {
    const testProps = Cases['Cache defined'];

    beforeEach(() => {
      cacheSection = mount(<CacheSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(cacheSection.find('Input').first().props().checked).toEqual(testProps.cache.active);
      expect(cacheSection.find('Input').at(1).props().value).toEqual(testProps.cache.ttl);
    });
  });
});
