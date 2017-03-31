/// <reference types='jest' />
import editServiceFormStore from '../editServiceFormStore';
import { toJS } from 'mobx';

describe('editServiceFormStore', () => {
  let store: any;
  beforeEach (() => {
    store = editServiceFormStore;
  });
  
  it('should set the corresponding observables with the obtained data from API Get service', done => {
    done();
    // try {
    //   setTimeout(() => {
    //     store.apiGetService(expectedGetService.id).then(() => {
    //       done();
    //     }).catch((e:any) => {
    //       done.fail(e);
    //     });
    //   }, 3000)
    // }catch(e){
    //   done.fail(e);
    // }
  });

  it('should set the observable response with the obtained response when API save is called', () => {

  });

  it('should set the observable response with the obtained response when API delete is called', () => {

  });

  it('should check the serviceRoles and remove all the roles in the roles map that are not defined in serviceRoles before the API save call', () => {

  });
});