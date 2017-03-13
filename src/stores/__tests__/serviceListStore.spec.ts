/// <reference types='jest' />
import { toJS } from 'mobx';

import serviceListStore from "../serviceListStore";
import * as fetchMock from "fetch-mock";

const expectedServices = [
  {
    "id": "service-0.",
    "logo": "http://placehold.it/64x64",
    "name": "string",
    "shortDescription": "Scelerisque lacus sapien tristique rhoncus nisl, porttitor erat est e.",
    "longDescription": "Diam aliquam adipiscing vehicula gravida gravida. Ex sem adipiscing felis. Vestibulum vehicula e tortor, etiam mollis velit cras sagittis pulvinar.",
    "roles": {
      "role-11": {
        "secretPaths": [
          "string"
        ]
      },
      "role-10": {
        "secretPaths": [
          "string"
        ]
      },
      "role-5": {
        "secretPaths": [
          "string"
        ]
      },
      "role-6": {
        "secretPaths": [
          "string"
        ]
      },
      "role-0": {
        "secretPaths": [
          "string"
        ]
      },
      "role-12": {
        "secretPaths": [
          "string"
        ]
      },
      "role-15": {
        "secretPaths": [
          "string"
        ]
      }
    }
  },
  {
    "id": "service-1.",
    "logo": "http://placehold.it/64x64",
    "name": "string",
    "shortDescription": "Natoque morbi vestibulum neque ex. Mollis scelerisque orci maximus dictum.",
    "longDescription": "Ut proin tempor ligula justo ac ante, curabitur tristique felis viverra aliquet viverra erat vitae finibus vel dignissim mollis vestibulum.",
    "roles": {
      "role-4": {
        "secretPaths": [
          "string"
        ]
      },
      "role-16": {
        "secretPaths": [
          "string"
        ]
      },
      "role-2": {
        "secretPaths": [
          "string"
        ]
      },
      "role-14": {
        "secretPaths": [
          "string"
        ]
      },
      "role-9": {
        "secretPaths": [
          "string"
        ]
      },
      "role-8": {
        "secretPaths": [
          "string"
        ]
      },
      "role-11": {
        "secretPaths": [
          "string"
        ]
      }
    }
  }
]

describe('editServiceFormStore', () => {
  let store:any;

  beforeEach(() => {
    store = serviceListStore;
  });

  it('should set the services list when client api get service list is called', (done) => {
    done()
    // try {
    //   setTimeout (() => {
    //     store.clientApiGetServiceList().then(() => {
    //       expect(toJS(store.services)).toEqual(expectedServices);
    //       done();
    //     }).catch((e:any) => {
    //       done.fail(e);
    //     })
    //   }, 1000);
    // }catch (e){
    //   done.fail(e);
    // }
  });

  it('should set the available roles from get services', (done) => {
    done()
    // try {
    //   setTimeout (() => {
    //     store.clientApiGetServiceList().then(() => {        
    //       done();
    //     }).catch((e:any) => {
    //       done.fail(e);
    //     })
    //   }, 1000);
    // }catch (e){
    //   done.fail(e);
    // }
  });
});