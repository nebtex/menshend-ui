/// <reference types='jest' />
import { toJS } from 'mobx';

import ServiceListStore from "../serviceListStore";
import * as fetchMock from "fetch-mock";

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
  let serviceListStore:ServiceListStore;
  fetchMock.get('*', JSON.stringify(expectedServices));

  beforeEach(() => {
    serviceListStore = new ServiceListStore();
  });

  it('should set the services list when client api get service list is called', (done) => {
    try {
      setTimeout (() => {
        serviceListStore.clientApiGetServiceList().then(() => {
          expect(toJS(serviceListStore.services)).toEqual(expectedServices);
          done();
        }).catch((e:any) => {
          done.fail(e);
        })
      }, 1000);
    }catch (e){
      done.fail(e);
    }
  });

  it('should set the available roles from get services', (done) => {
    try {
      setTimeout (() => {
        serviceListStore.clientApiGetServiceList().then(() => {
          let allExist = true;
          const roles = serviceListStore.roles;

          serviceListStore.services.forEach((service) => {
            service.roles.forEach((role) => {
              if (roles.indexOf(role) === -1)
                allExist = false;
            })
          })

          expect(allExist).toEqual(true);          
          done();
        }).catch((e:any) => {
          done.fail(e);
        })
      }, 1000);
    }catch (e){
      done.fail(e);
    }
  });
});