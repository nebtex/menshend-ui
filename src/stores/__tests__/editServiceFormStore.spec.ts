/// <reference types='jest' />
import EditServiceFormStore from '../editServiceFormStore';
import { toJS } from 'mobx';

const expectedResponse = {
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

describe('editServiceFormStore', () => {
  describe('Default', () => {
    let editServiceFormStore:EditServiceFormStore;
    fetch.post('*', JSON.stringify(expectedResponse));

    beforeEach (() => {
      editServiceFormStore = new EditServiceFormStore();
    })

    it('should set the observable response with the obtained response when API save is called', done => {
      try {
        setTimeout(() => {
          editServiceFormStore.clientApiSaveService().then(() => {
            expect(toJS(editServiceFormStore.response)).toEqual(expectedResponse);
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
      try {
        setTimeout(() => {
          editServiceFormStore.clientApiDeleteService().then(() => {
            expect(toJS(editServiceFormStore.response)).toEqual(expectedResponse);
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
      //@TODO
    });

    it('should check the serviceRoles and remove all the roles in the roles map that are not defined in serviceRoles before the API save call', () => {
      //@TODO
    });
  });
});
