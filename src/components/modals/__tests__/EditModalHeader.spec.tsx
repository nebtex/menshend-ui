/// <reference types='jest' />

import * as React from 'react';
import  FullModal from '../FullModal';
import  Cases from './FullModal.cases';
import { shallow, mount, render } from 'enzyme';

describe('FullModal', () => {
  let fullModal:any;
  let toggleMock: any;
  describe('Close the modal', () => {    
    beforeEach(() => {
      toggleMock = jest.fn();
      fullModal = mount(<FullModal {...Cases['Default']} toggle={toggleMock} />);
    });

    it('Should call toggle when the close button is clicked', () => {
      fullModal.find("button").simulate("click")
      expect(toggleMock.mock.calls.length).toEqual(1);

    });
    it('Should close the modal when the esc key button is pressed', () => {
      fullModal.first().simulate('keyPress', {keyCode: 27});
      expect(toggleMock.mock.calls.length).toEqual(1);

    });
  });

 describe('render', () => {    
    beforeEach(() => {
      fullModal = shallow(<FullModal {...Cases['Modal is closed']} />);
    });

    it('Should not render when isOpen is false', () => {
      expect(fullModal.equals(null)).toEqual(true);
    });
  });

});
