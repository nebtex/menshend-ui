/// <reference types='jest' />

import * as React from 'react';
import  NavBar from '../NavBar';
import  Cases from './NavBar.cases';
import { shallow, mount, render } from 'enzyme';

describe('NavBar', () => {
  let navBar:any;
  let toggleTabMock:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      toggleTabMock = jest.fn();
      navBar = mount(
        <NavBar 
        {...testProps}
        toggleTab={toggleTabMock}
      />);
    });

    it("should call the toggleTab prop when specified action is performed" ,() => {
      const navLink = navBar.find('NavLink').first();
      navLink.simulate('click');
      expect(toggleTabMock).toBeCalled();
    });
  });

  describe('Proxy active', () => {
    it("should render the CORS tab when proxyActive is true" ,() => {
    });
  });
});
