/// <reference types='jest' />

import * as React from 'react';
import  SecretPathsSection from '../SecretPathsSection';
import  Cases from './SecretPathsSection.cases';
import { shallow, mount, render } from 'enzyme';

describe('SecretPathsSection', () => {
  let secretPathsSection:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      secretPathsSection = mount(<SecretPathsSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });

    it("should call the HandleSecretPathAdd prop when specified action is performed" ,() => {})
    it("should call the HandleSecretPathDelete prop when specified action is performed" ,() => {})

  });

  describe('Data defined', () => {

    const testProps = Cases['Data defined'];

    beforeEach(() => {
      secretPathsSection = mount(<SecretPathsSection {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });

});
