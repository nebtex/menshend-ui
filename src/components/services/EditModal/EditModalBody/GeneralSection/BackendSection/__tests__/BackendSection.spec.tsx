/// <reference types='jest' />

import * as React from 'react';
import  BackendSection from '../BackendSection';
import  Cases from './BackendSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('BackendSection', () => {
  let backendSection:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      backendSection = mount(<BackendSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });

    it("should call the strategyOnChange prop when specified action is performed" ,() => {})
    it("should call the csrfOnChange prop when specified action is performed" ,() => {})
    it("should call the impersonateWithinRoleOnChange prop when specified action is performed" ,() => {})
    it("should call the isActiveOnChange prop when specified action is performed" ,() => {})
  });

  describe('Data defined', () => {

    const testProps = Cases['Data defined'];

    beforeEach(() => {
      backendSection = mount(<BackendSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });
});
