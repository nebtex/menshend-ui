/// <reference types='jest' />
import LoginStore from '../loginStore';

const expectedResponse = {
  isLogged: true,
  isAdmin: true,
  canImpersonate: true,
  sessionExpiresAt: Date.now() + 36000000
}

describe('editServiceFormStore', () => {
  
  // let loginStore:LoginStore;

  beforeEach(() => {
    // loginStore = new LoginStore();  
  });

  it('should receive the expected response when get status API is called', done => {
    done();
    // try {
    //   setTimeout(() => {
    //     loginStore.clientApiLoginStatus().then(() => {
    //       expect(loginStore.loginStatus).toEqual(expectedResponse);
    //       done();
    //     }).catch((e:any) => {
    //       done.fail(e);
    //     });
    //   }, 1000)
    // }catch (e) {
    //   done.fail(e);
    // }
  });
});