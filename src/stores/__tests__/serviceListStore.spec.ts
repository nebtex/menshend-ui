/// <reference types='jest' />
import { toJS } from 'mobx';

import serviceListStore from "../serviceListStore";
import * as fetchMock from "fetch-mock";

const expectedServices = [
  {
    "id": "roles/role-0/subdomain-0",
    "roleId": "role-0",
    "subDomain": "subdomain-0",
    "logo": "http://placehold.it/64x64",
    "name": "Sealine",
    "longDescription": "Auctor tristique vulputate erat eti mattis. Vestibulum posuere nisi nibh justo, ut morbi sit consequat risus, laoreet lacinia dictum eros.",
    "longDescriptionUrl": "sealine.mobi/longDescription",
    "impersonateWithinRole": true,
    "secretPaths": [
      "string"
    ]
  },
  {
    "id": "roles/role-1/subdomain-1",
    "roleId": "role-1",
    "subDomain": "subdomain-1",
    "logo": "http://placehold.it/64x64",
    "name": "Keysoft",
    "longDescription": "Elit suscipit velit vehicula ligula tempus dignissim faucibus, donec sodales eget nisi rhoncus viverra lorem cras, auctor non dui dui.",
    "longDescriptionUrl": "keysoft.edu/longDescription",
    "impersonateWithinRole": false,
    "secretPaths": [
      "string"
    ]
  },
  {
    "id": "roles/role-2/subdomain-2",
    "roleId": "role-2",
    "subDomain": "subdomain-2",
    "logo": "http://placehold.it/64x64",
    "name": "LoopSys",
    "longDescription": "A sit nulla vehicula neque. Ante ac natoque accumsan laoreet au ut hendrerit erat ipsum sollicitudin condimentum eros tincidunt i.",
    "longDescriptionUrl": "loopsys.club/longDescription",
    "impersonateWithinRole": false,
    "secretPaths": [
      "string"
    ]
  }
]

describe('editServiceFormStore', () => {
  let store:any;

  beforeEach(() => {
    store = serviceListStore;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });

  it('should set the services list when client api get service list is called', (done) => {
    try {
      setTimeout (() => {
        store.clientApiGetServiceList().then(() => {

          expect(toJS(store.services)).toEqual(expectedServices);
          done();
        }).catch((e:any) => {
          done.fail(e);
        })
      }, 1000);
    }catch (e){
      done.fail(e);
    }
  });

  it('should set the available roles from get services', (done) => {
    try {
      setTimeout (() => {
        store.clientApiGetServiceList().then(() => {
          const expectedRoles = [];
          const storeRoles = store.roles;          
          expectedServices.forEach((service) => {
            let role = service.roleId;
            if(!expectedRoles.includes(role))
              expectedRoles.push(role);
          });
          expectedRoles.sort()

          expect(storeRoles).toEqual(expectedRoles);
          done();
        }).catch((e:any) => {
          done.fail(e);
        })
      }, 1000);
    }catch (e){
      done.fail(e);
    }
  });
});