/// <reference types='jest' />

import * as React from 'react';
import  LongDescriptionSection from '../LongDescriptionSection';
import  Cases from './LongDescriptionSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('LongDescriptionSection', () => {
  let longDescriptionSection:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      longDescriptionSection = mount(<LongDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });

    it("should call the longDescriptionUrlOnChange prop when specified action is performed" ,() => {})
    it("should call the longDescriptionUrlActiveOnChange prop when specified action is performed" ,() => {})
    it("should call the longDescriptionOnChange prop when specified action is performed" ,() => {})
  });
  
  describe('URL Inactive', () => {

    const testProps = Cases['URL Inactive'];

    beforeEach(() => {
      longDescriptionSection = mount(<LongDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });

  describe('URL Error', () => {

    const testProps = Cases['URL Error'];

    beforeEach(() => {
      longDescriptionSection = mount(<LongDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });

  describe('URL Active', () => {

    const testProps = Cases['URL Active'];

    beforeEach(() => {
      longDescriptionSection = mount(<LongDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });
});
