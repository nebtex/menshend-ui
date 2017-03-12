/// <reference types='jest' />
import editServiceFormStore from '../editServiceFormStore';
import { toJS } from 'mobx';

const expectedGetService = {
  "id": "service-0.",
  "roleId": "role-1",
  "logo": "http://placehold.it/64x64",
  "name": "LexiconLabs",
  "shortDescription": "Eros blandit proin sit gravida ornare lectus velit proin quisque.",
  "longDescription": "Gravida tristique ac sapien i mattis facilisis. Purus pellentesque aliquet leo. Sem sit pellentesque fringilla in, sit non at velit.",
  "longDescriptionUrl": "lexiconlabs.eu/longDescription",
  "proxyCode": "__ === your code here ===",
  "proxyCodeLanguage": 0,
  "impersonateWithinRole": true,
  "isActive": true,
  "csrf": true,
  "strategy": 0,
  "cache": {
    "active": false,
    "ttl": 0
  },
  "cors": {
    "allowedOrigins": [
      "string"
    ],
    "allowedMethods": [
      "string"
    ],
    "allowedHeaders": [
      "string"
    ],
    "allowCredentials": false,
    "optionsPassthrough": false,
    "maxAge": false,
    "exposedHeaders": [
      "string"
    ]
  },
  "secretPaths": [
    "string"
  ]
}

describe('editServiceFormStore', () => {
  let store: any;
  beforeEach (() => {
    store = editServiceFormStore;
  });
  
  it('should set the corresponding observables with the obtained data from API Get service', done => {
    try {
      setTimeout(() => {
        store.apiGetService('service-0.').then(() => {
          expect(store.name).toEqual(expectedGetService.name);
          expect(store.logo).toEqual(expectedGetService.logo);
          expect(store.shortDescription).toEqual(expectedGetService.shortDescription);
          expect(store.longDescription).toEqual(expectedGetService.longDescription);
          expect(store.longDescriptionUrl).toEqual(expectedGetService.longDescriptionUrl);
          expect(store.proxyCode).toEqual(expectedGetService.proxyCode)
          expect(store.proxyCodeLanguage).toEqual(expectedGetService.proxyCodeLanguage)
          expect(store.csrf).toEqual(expectedGetService.csrf)
          expect(store.impersonateWithinRole).toEqual(expectedGetService.impersonateWithinRole)
          expect(store.isActive).toEqual(expectedGetService.isActive)
          expect(store.strategy).toEqual(expectedGetService.strategy)
          expect(JSON.stringify(store.cache)).toEqual(JSON.stringify(expectedGetService.cache))
          expect(JSON.stringify(store.cors)).toEqual(JSON.stringify(expectedGetService.cors))
          expect(JSON.stringify(store.secretPaths)).toEqual(JSON.stringify(expectedGetService.secretPaths))
          done();
        }).catch((e:any) => {
          done.fail(e);
        });
      }, 3000)
    }catch(e){
      done.fail(e);
    }
  });

  it('should set the observable response with the obtained response when API save is called', () => {

  });

  it('should set the observable response with the obtained response when API delete is called', () => {

  });

  it('should check the serviceRoles and remove all the roles in the roles map that are not defined in serviceRoles before the API save call', () => {

  });
});