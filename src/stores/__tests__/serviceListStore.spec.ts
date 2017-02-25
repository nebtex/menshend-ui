/// <reference types='jest' />
import ServiceListStore from "../serviceListStore";

describe('editServiceFormStore', () => {
  describe('Default', () => {
    let serviceListStore:ServiceListStore;

    beforeEach(() => {
      serviceListStore = new ServiceListStore();
    });

    it('should return the services list when client api get service list is called', () => {
      fetch.mockResponse(JSON.stringify({access_token: '12345' }))
      serviceListStore.clientApiGetServiceList().then((response:any) => {
        console.log('this is the response', response);
      }).catch((err:any) => {
        console.log('this is the err', err);
      });
    });
  });
});