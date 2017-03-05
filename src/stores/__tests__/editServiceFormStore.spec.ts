/// <reference types='jest' />
import EditServiceFormStore from '../editServiceFormStore';
import { toJS } from 'mobx';

const expectedGetService = {
  "id": "service-1.",
  "roleId": "role-0",
  "logo": "http://placehold.it/64x64.png",
  "name": "Terralabs",
  "shortDescription": "short description changed",
  "longDescription": "Tortor est e cursus lorem ligula quisque dolor, bibendum faucibus justo eget in etiam, vel eti quis tempus euismod ante.",
  "longDescriptionUrl": "terralabs.org/longDescription",
  "proxyCode": "__ === your code here ===",
  "proxyCodeLanguage": 0,
  "impersonateWithinRole": true,
  "isActive": true,
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
    "allowCredentials": true,
    "optionsPassthrough": true,
    "maxAge": true,
    "exposedHeaders": [
      "string"
    ]
  },
  "secretPaths": [
    "string"
  ]
}

describe('editServiceFormStore', () => {
  let editServiceFormStore:EditServiceFormStore;

  beforeEach (() => {
    editServiceFormStore = new EditServiceFormStore();
  });
  
  it('should set the corresponding observables with the obtained data from API Get service', done => {
    try {
      setTimeout(() => {
        editServiceFormStore.apiGetService('service-1.').then(() => {
          expect(editServiceFormStore.name).toEqual(expectedGetService.name);
          expect(editServiceFormStore.logo).toEqual(expectedGetService.logo);
          expect(editServiceFormStore.shortDescription).toEqual(expectedGetService.shortDescription);
          expect(editServiceFormStore.longDescription).toEqual(expectedGetService.longDescription);
          expect(editServiceFormStore.longDescriptionUrl).toEqual(expectedGetService.longDescriptionUrl);
          //@TODO: check the missing properties
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

  it('should create a new role in service map if a role is moved from AllRoles to a  serviceRoles, and the role does not exist', () => {
    editServiceFormStore.addToAllRoles('my_test_role');
    editServiceFormStore.moveRoleFromAllToService('my_test_role');
    expect(editServiceFormStore.allRoles.indexOf('my_test_role')).toEqual(-1);
    expect(editServiceFormStore.serviceRoles.indexOf('my_test_role')).toBeGreaterThan(-1);
    expect(editServiceFormStore.roles.has('my_test_role')).toEqual(true);
  });

  it('should not change the service map if a existing serviceRoles is move to AllRoles', () => {
    editServiceFormStore.addServiceRole('my_test_role');
    editServiceFormStore.moveRoleFromServiceToAll('my_test_role');
    expect(editServiceFormStore.allRoles.indexOf('my_test_role')).toBeGreaterThan(-1);
    expect(editServiceFormStore.serviceRoles.indexOf('my_test_role')).toEqual(-1);
    expect(editServiceFormStore.roles.has('my_test_role')).toEqual(true);
  });

  it('should check the serviceRoles and remove all the roles in the roles map that are not defined in serviceRoles before the API save call', () => {

  });
});