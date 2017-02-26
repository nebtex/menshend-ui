/// <reference types='jest' />
import LoginStore from '../loginStore';
import * as fetchMock from "fetch-mock";

const expectedResponse = {
  isLogged: true,
  isAdmin: true,
  canImpersonate: true,
  sessionExpiresAt: Date.now() + 36000000
}

describe('editServiceFormStore', () => {
  
  let loginStore:LoginStore;
  fetchMock.get('*', JSON.stringify(expectedResponse));

  beforeEach(() => {
    loginStore = new LoginStore();  
  });

  it('should receive the expected response when get status API is called', done => {
    try {
      setTimeout(() => {
        loginStore.clientApiLoginStatus().then(() => {
          expect(loginStore.loginStatus).toEqual(expectedResponse);
          done();
        }).catch((e:any) => {
          done.fail(e);
        });
      }, 1000)
    }catch (e) {
      done.fail(e);
    }
  });
});