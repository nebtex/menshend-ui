/// <reference types='jest' />

import * as React from 'react';
import  EditModal from '../EditModal';
import  Cases from './EditModal.cases';
import { shallow, mount, render } from 'enzyme';

describe('EditModal', () => {
  let editModal:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      editModal = mount(<EditModal {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });

  describe('Service', () => {

    const testProps = Cases['Service'];

    beforeEach(() => {
      editModal = mount(<EditModal {...testProps} />);
    });

    it("should render correctly", () => {
      
    });
  });
});
