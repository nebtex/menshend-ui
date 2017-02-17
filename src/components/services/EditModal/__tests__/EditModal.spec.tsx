/// <reference types='jest' />

import * as React from 'react';
import  EditModal from '../EditModal';
import  Cases from './EditModal.cases';
import { shallow, mount, render } from 'enzyme';

describe('EditModal', () => {
  let editModal:any;

  describe('No service', () => {

    const testProps = Cases['No service'];

    beforeEach(() => {
      editModal = mount(<EditModal {...testProps} />);
    });

    it('should render correctly', () => {
    });
  });
});
