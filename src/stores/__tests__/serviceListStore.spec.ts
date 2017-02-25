/// <reference types='jest' />

import ServiceListStore from "../serviceListStore";

const expectedServices = {
  "Bellgate":{
    "name": "Bellgate",
    "shortDescription": "short description Nisi eti velit et au. Ante commodo suscipit risus vulputate.",
    "longDescription": "long description Tincidunt auctor aliquet id dictum i porttitor, lacinia at suscipit accumsan nisl, sodales laoreet ipsum turpis, in lacinia laoreet turpis vulputate nam, vestibulum ex eget at, ante pellentesque ante donec.",
    "logo": "http://placehold.it/64x64",
    "roles": [
        "Eu.",
        "Au.",
        "A."
    ]
  },
  "Ulogica": {
    "name": "Ulogica",
    "shortDescription": "short description Eu lacinia mollis aliquet est amet arcu donec dolor suscipit.",
    "longDescription": "long description Ipsum sollicitudin ante posuere viverra tortor rhoncus metus. Pretium et lectus tincidunt elementum proin pulvinar, purus lectus eros at diam. Vitae at quis e, metus arcu morbi cursus tempus ultrices.",
    "logo": "http://placehold.it/64x64",
    "roles": [
        "Dolor.",
        "Vulputate.",
        "Proin."
    ]
  }
}

describe('editServiceFormStore', () => {
  describe('Default', () => {
    let serviceListStore:ServiceListStore;

    beforeEach(() => {
      serviceListStore = new ServiceListStore();
    });

    it('should set the services list when client api get service list is called', (done) => {
      fetch.get('*', JSON.stringify(expectedServices));
      try {
        setTimeout (() => {
          serviceListStore.clientApiGetServiceList().then((serviceList:any) => {
            expect(serviceListStore.services.toJS()).toEqual(expectedServices);
            done();
          })
        }, 3000);
      }catch (e){
        done.fail(e);
      }
    });
  });
});