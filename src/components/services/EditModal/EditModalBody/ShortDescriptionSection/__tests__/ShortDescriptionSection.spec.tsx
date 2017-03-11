/// <reference types='jest' />

import * as React from 'react';
import  ShortDescriptionSection from '../ShortDescriptionSection';
import  Cases from './ShortDescriptionSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('ShortDescriptionSection', () => {
  let shortDescriptionSection:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      shortDescriptionSection = mount(<ShortDescriptionSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });
});
