/// <reference types='jest' />
import { toJS } from 'mobx';

import serviceListStore from "../serviceListStore";
import * as fetchMock from "fetch-mock";

const expectedServices = [
]

describe('editServiceFormStore', () => {
  let store:any;

  beforeEach(() => {
    store = serviceListStore;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });

  it('should set the services list when client api get service list is called', (done) => {
    done();
  });

  it('should set the available roles from get services', (done) => {
    done();
  });
});