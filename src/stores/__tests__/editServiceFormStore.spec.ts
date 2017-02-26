/// <reference types='jest' />
import EditServiceFormStore from '../editServiceFormStore';
import { toJS } from 'mobx';
import * as fetchMock from "fetch-mock";

const expectedResponsePost = {
  success: true,
  message: "OK",
  roles: {
    "role1": {
      message: "OK",
      success: true
    },
    "role2": {
      message: "OK",
      success: true
    }
  }
}

const expectedResponseGet = {
  success: true,
  message: "OK",
  service: {
    subDomain: "testSubdomain",
    logo: "testlogo",
    name: "testservice", 
    shortDescription: "short description",
    longDescription: "long description",
    longDescriptionUrl: "long description url",
    roles: {
      "testRole":{
        luaScript: "__==== your code here ====",
        impersonateWithinRole: true,
        proxy: true,
        isActive: true
      },
      "testRole2": {
        luaScript: "__==== your code here ====",
        impersonateWithinRole: true,
        proxy: true,
        isActive: true
      }
    }
  }
}

describe('editServiceFormStore', () => {
  describe('Get', () => {
    let editServiceFormStore:EditServiceFormStore;
    
    beforeEach (() => {
      editServiceFormStore = new EditServiceFormStore();
    })

    afterEach (() => {
      fetchMock.restore();
    })

    it('should set the corresponding observables with the obtained data from API Get service', done => {
      fetchMock.get('*', {body:JSON.stringify(expectedResponseGet)});
      try {
        setTimeout(() => {
          editServiceFormStore.clientApiGetService('testSubdomain').then(() => {
            expect(editServiceFormStore.subDomain).toEqual(expectedResponseGet.service.subDomain);
            expect(editServiceFormStore.name).toEqual(expectedResponseGet.service.name);
            expect(editServiceFormStore.logo).toEqual(expectedResponseGet.service.logo);
            expect(editServiceFormStore.longDescription).toEqual(expectedResponseGet.service.longDescription);
            expect(editServiceFormStore.shortDescription).toEqual(expectedResponseGet.service.shortDescription);
            expect(editServiceFormStore.longDescriptionUrl).toEqual(expectedResponseGet.service.longDescriptionUrl);
            expect(toJS(editServiceFormStore.roles)).toEqual(expectedResponseGet.service.roles);
            done()
          }).catch((e:any) => {
            done.fail(e);
          });
        }, 2000)
      }catch (e){
        done.fail(e);
      }
    });
  })

  describe('Default', () => {
    let editServiceFormStore:EditServiceFormStore;

    beforeEach (() => {
      editServiceFormStore = new EditServiceFormStore();
    })

    it('should set the observable response with the obtained response when API save is called', done => {
      fetchMock.post('*', {body:JSON.stringify(expectedResponsePost)});
      fetchMock.get('*', {body:JSON.stringify(expectedResponseGet)});      
      try {
        setTimeout(() => {
          editServiceFormStore.clientApiSaveService().then(() => {
            expect(toJS(editServiceFormStore.response)).toEqual(expectedResponsePost);
            done();
          }).catch((e:any) => {
            done.fail(e);
          })
        }, 2000);
      }catch (e){
        done.fail(e);
      }
    });

    it('should set the observable response with the obtained response when API delete is called', done => {
      fetchMock.post('/v1/api/admin/service/delete', {body:JSON.stringify(expectedResponsePost)});      
      try {
        setTimeout(() => {
          editServiceFormStore.clientApiDeleteService().then(() => {
            expect(toJS(editServiceFormStore.response)).toEqual(expectedResponsePost);
            done();
          }).catch((e:any) => {
            done.fail(e);
          })
        }, 2000);
      }catch (e){
        done.fail(e);
      }
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

    it('should check the serviceRoles and remove all the roles in the roles map that are not defined in serviceRoles before the API save call', done => {
      editServiceFormStore.addServiceRole('my_test_role');
      editServiceFormStore.addServiceRole('my_test_role2');
      editServiceFormStore.addServiceRole('my_test_role3');
      editServiceFormStore.moveRoleFromServiceToAll('my_test_role2');
      editServiceFormStore.moveRoleFromServiceToAll('my_test_role3');
      expect(editServiceFormStore.roles.size).toEqual(3);

      try {
        setTimeout(()=>{
          // this function calls the save and the delete API methods
          editServiceFormStore.save().then(() => {
            expect(editServiceFormStore.roles.has('my_test_role')).toEqual(true);
            expect(editServiceFormStore.roles.has('my_test_role2')).toEqual(false);
            expect(editServiceFormStore.roles.has('my_test_role3')).toEqual(false);
            done();
          }).catch((e:any) => {
            done.fail(e);
          })
        }, 1000)
      }catch (e){
        done.fail(e);
      }
    });
  });
});
