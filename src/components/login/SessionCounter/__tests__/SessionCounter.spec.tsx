/// <reference types='jest' />

import * as React from 'react';
import  SessionCounter from '../SessionCounter';
import  Cases from './SessionCounter.cases';
import { shallow, mount, render } from 'enzyme';

describe('SessionCounter', () => {
  const HOUR = 3600000;
  const MINUTE = 60000;
  const SECOND = 1000;
  let sessionCounter:any;

  describe('Non expired', () => {

    const testProps = Cases['Non expired'];

    beforeEach(() => {
      sessionCounter = mount(<SessionCounter {...testProps} />);
    });

    it('should render correctly', (done) => {
      try{
        setTimeout(()=>{
          let time = sessionCounter.props().expiresAt - Date.now();
          let seconds = Math.floor((time / SECOND) % 60);
          let minutes = Math.floor((time / MINUTE) % 60);
          let hours = Math.floor((time / HOUR));
          expect(sessionCounter.find('.displayItem').length).toEqual(3);
          expect(sessionCounter.find('.displayItem').first().find('div').at(1).text()).toEqual(hours.toString());
          expect(sessionCounter.find('.displayItem').at(1).find('div').at(1).text()).toEqual(minutes.toString());
          expect(sessionCounter.find('.displayItem').at(2).find('div').at(1).text()).toEqual(seconds.toString());
          console.log(sessionCounter.find('.displayItem').at(2).find('div').at(1).text(), seconds.toString());          
          done();
        }, 1300);
      }catch(e) {
        done.fail(e);
      }
    });
  });

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