/// <reference types='jest' />

import * as React from 'react';
import  CacheSection from '../CacheSection';
import  Cases from './CacheSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('CacheSection', () => {
  let cacheSection:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      cacheSection = mount(<CacheSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });

    it("should call ttlOnChange prop when specified action is called", () => {

    });

    it("should call cacheActiveOnChange prop when specified action is called", () => {

    });
  });

  describe('Cache defined', () => {
    const testProps = Cases['Cache defined'];

    beforeEach(() => {
      cacheSection = mount(<CacheSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });
});
