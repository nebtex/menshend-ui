/// <reference types='jest' />

import * as React from 'react';
import  ShortDescriptionSection from '../ShortDescriptionSection';
import  Cases from './ShortDescriptionSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('ShortDescriptionSection', () => {
  let shortDescriptionSection:any;
  let shortDescriptionOnChangeMock:any;

  describe('Default', () => {
    const testProps = Cases['Default'];

    beforeEach(() => {
      shortDescriptionOnChangeMock = jest.fn();
      shortDescriptionSection = mount(
        <ShortDescriptionSection
          {...testProps} 
          shortDescriptionOnChange={shortDescriptionOnChangeMock}
        />);
    });

    it("should render correctly", () => {
      expect(shortDescriptionSection.find('FormGroup').length).toEqual(1);
    });

    it("should call shortDescriptionOnChange prop when corresponding action is performed", () => {
      const input = shortDescriptionSection.find('Input');
      input.simulate('change');
      expect(shortDescriptionOnChangeMock).toBeCalled();
    });
  });

  describe('Data defined', () => {

    const testProps = Cases['Data defined'];

    beforeEach(() => {
      shortDescriptionSection = mount(<ShortDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      expect(shortDescriptionSection.find('Input').first().text()).toEqual(Cases['Data defined'].shortDescription);
    });
  });
});
