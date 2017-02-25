/// <reference types='jest' />
import ServiceListStore from "../serviceListStore";

const expectedServices = {
  "Bellgate":{
    "name": "Bellgate",
    "short_description": "short description Nisi eti velit et au. Ante commodo suscipit risus vulputate.",
    "long_description": "long description Tincidunt auctor aliquet id dictum i porttitor, lacinia at suscipit accumsan nisl, sodales laoreet ipsum turpis, in lacinia laoreet turpis vulputate nam, vestibulum ex eget at, ante pellentesque ante donec.",
    "logo": "http://placehold.it/64x64",
    "roles": [
        "Eu.",
        "Au.",
        "A."
    ]
  },
  "Ulogica": {
    "name": "Ulogica",
    "short_description": "short description Eu lacinia mollis aliquet est amet arcu donec dolor suscipit.",
    "long_description": "long description Ipsum sollicitudin ante posuere viverra tortor rhoncus metus. Pretium et lectus tincidunt elementum proin pulvinar, purus lectus eros at diam. Vitae at quis e, metus arcu morbi cursus tempus ultrices.",
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

    it('should return the services list when client api get service list is called', () => {
      fetch.mockResponse(JSON.stringify(expectedServices))
      serviceListStore.clientApiGetServiceList().then((response:any) => {
        expect(serviceListStore.services.toJS()).toEqual(expectedServices);
      }).catch((err:any) => {
        console.log('this is the err', err);
      });
    });
  });
});