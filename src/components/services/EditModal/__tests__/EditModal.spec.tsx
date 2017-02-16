/// <reference types='jest' />

import * as React from 'react';
import  EditModal from '../EditModal';
import  Cases from './EditModal.cases';
import { shallow, mount, render } from 'enzyme';

describe('EditModal', () => {
  let editModal:any;

  describe('default', () => {

    const testProps = Cases['default'];

    beforeEach(() => {
      editModal = mount(<EditModal {...testProps} />);
    });

    it('should render correctly', () => {
     
     
    });
  });
});
