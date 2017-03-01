/// <reference types='jest' />
import EditServiceFormStore from '../editServiceFormStore';
import { toJS } from 'mobx';

describe('editServiceFormStore', () => {
  let editServiceFormStore:EditServiceFormStore;

  beforeEach (() => {
    editServiceFormStore = new EditServiceFormStore();
  });
  
  it('should set the corresponding observables with the obtained data from API Get service', () => {
    
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