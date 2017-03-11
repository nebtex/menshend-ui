/// <reference types='jest' />

import * as React from 'react';
import  NavBar from '../NavBar';
import  Cases from './NavBar.cases';
import { shallow, mount, render } from 'enzyme';

describe('NavBar', () => {
  let navBar:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      navBar = mount(<NavBar {...testProps} />);
    });

    it("should render correctly", () => {
      
    });

    it("should call the toggleTab prop when specified action is performed" ,() => {})
  });
});
