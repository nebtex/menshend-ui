/// <reference types='jest' />

import * as React from 'react';
import  GeneralSection from '../GeneralSection';
import  Cases from './GeneralSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('GeneralSection', () => {
  let generalSection:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });

    it("should call the nameOnChange prop when specified action is performed" ,() => {})

    it("should call the logoOnChange prop when specified action is performed" ,() => {})
  });

  describe('Data defined', () => {

    const testProps = Cases['Data defined'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });

  describe('Name error', () => {

    const testProps = Cases['Name error'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });

  describe('Logo error', () => {

    const testProps = Cases['Logo error'];

    beforeEach(() => {
      generalSection = mount(<GeneralSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });
});
