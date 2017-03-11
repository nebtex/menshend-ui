/// <reference types='jest' />

import * as React from 'react';
import  CorsSection from '../CorsSection';
import  Cases from './CorsSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('CorsSection', () => {
  let corsSection:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      corsSection = mount(<CorsSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });

    it("should call allowCredentialsOnChange when corresponding action is called ", () => {

    });

    it("should call optionsPassthroughOnChange when corresponding action is called ", () => {

    });
    
    it("should call maxAgeOnChange when corresponding action is called ", () => {

    });

    it("should call handleAllowedOriginsAdd when corresponding action is called ", () => {

    });

    it("should call handleAllowedOriginsDelete when corresponding action is called ", () => {

    });

    it("should call handleAllowedMethodsAdd when corresponding action is called ", () => {

    });

    it("should call handleAllowedMethodsDelete when corresponding action is called ", () => {

    });

    it("should call handleAllowedHeadersAdd when corresponding action is called ", () => {

    });

    it("should call handleAllowedHeadersDelete when corresponding action is called ", () => {

    });

    it("should call handleExposedHeadersAdd when corresponding action is called ", () => {

    });

    it("should call handleExposedHeadersDelete when corresponding action is called ", () => {

    });
  });
});
