/// <reference types='jest' />

import * as React from 'react';
import  SessionCounter from '../SessionCounter';
import  Cases from './SessionCounter.cases';
import { shallow, mount, render } from 'enzyme';

describe('1 SessionCounter', () => {
  const HOUR = 3600000;
  const MINUTE = 60000;
  const SECOND = 1000;
  let sessionCounter:any;

  describe('Expired', () => {

    const testProps = Cases['Expired'];

    beforeEach(() => {
      sessionCounter = mount(<SessionCounter {...testProps} />);
    });

    it('should render correctly', () => {
      expect(sessionCounter.find('.displayItem').length).toEqual(3);
      expect(sessionCounter.find('.displayItem').first().find('div').at(1).text()).toEqual('0');
      expect(sessionCounter.find('.displayItem').at(1).find('div').at(1).text()).toEqual('0');
      expect(sessionCounter.find('.displayItem').at(2).find('div').at(1).text()).toEqual('0');
    });
  });
});