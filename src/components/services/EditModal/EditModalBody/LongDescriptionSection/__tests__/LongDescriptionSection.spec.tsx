/// <reference types='jest' />

import * as React from 'react';
import  LongDescriptionSection from '../LongDescriptionSection';
import  Cases from './LongDescriptionSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('LongDescriptionSection', () => {
  let longDescriptionSection:any;
  let longDescriptionUrlOnChangeMock:any;
  let longDescriptionOnChangeMock:any;
  let longDescriptionUrlActiveOnChangeMock:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      longDescriptionUrlOnChangeMock = jest.fn();
      longDescriptionOnChangeMock = jest.fn();
      longDescriptionUrlActiveOnChangeMock = jest.fn();
      longDescriptionSection = mount(
        <LongDescriptionSection 
          {...testProps} 
          longDescriptionOnChange={longDescriptionOnChangeMock}
          longDescriptionUrlActiveOnChange={longDescriptionUrlActiveOnChangeMock}
          longDescriptionUrlOnChange={longDescriptionUrlOnChangeMock} />);
    });

    it("should render correctly", () => {
      expect(longDescriptionSection.find('FormGroup').length).toEqual(3);
      expect(longDescriptionSection.find('Input').length).toEqual(3);
    });

    it("should call the longDescriptionUrlActiveOnChange prop when specified action is performed" ,() => {
      const checkbox = longDescriptionSection.find('Input').first();
      checkbox.simulate('change');
      expect(longDescriptionUrlActiveOnChangeMock).toBeCalled();
    });

    it("should call the longDescriptionUrlOnChange prop when specified action is performed" ,() => {
      const urlInput = longDescriptionSection.find('Input').at(1);
      urlInput.simulate('change');
      expect(longDescriptionUrlOnChangeMock).toBeCalled();
    });

    it("should call the longDescriptionOnChange prop when specified action is performed" ,() => {
      const descriptionInput = longDescriptionSection.find('Input').at(2);
      descriptionInput.simulate('change');
      expect(longDescriptionOnChangeMock).toBeCalled();
    });
  });
  
  describe('URL Inactive', () => {

    const testProps = Cases['URL Inactive'];

    beforeEach(() => {
      longDescriptionSection = mount(<LongDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(longDescriptionSection.find('FormGroup').at(1).props().disabled).toBe(true);
      expect(longDescriptionSection.find('Input').at(1).props().disabled).toBe(true);
      expect(longDescriptionSection.find('FormGroup').at(2).props().disabled).toBe(false);
      expect(longDescriptionSection.find('Input').at(2).props().disabled).toBe(false);
    });
  });

  describe('URL Error', () => {

    const testProps = Cases['URL Error'];

    beforeEach(() => {
      longDescriptionSection = mount(<LongDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(longDescriptionSection.find('FormGroup').at(1).props().disabled).toBe(false);      
      expect(longDescriptionSection.find('FormGroup').at(1).props().color).toBe('danger');
      expect(longDescriptionSection.find('Input').at(1).props().disabled).toBe(false);
      expect(longDescriptionSection.find('Input').at(1).props().state).toBe('danger');            
    });
  });

  describe('URL Active', () => {

    const testProps = Cases['URL Active'];

    beforeEach(() => {
      longDescriptionSection = mount(<LongDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(longDescriptionSection.find('FormGroup').at(1).props().disabled).toBe(false);
      expect(longDescriptionSection.find('Input').at(1).props().disabled).toBe(false);
      expect(longDescriptionSection.find('FormGroup').at(2).props().disabled).toBe(true);
      expect(longDescriptionSection.find('Input').at(2).props().disabled).toBe(true);
    });
  });
});
