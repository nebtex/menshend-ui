import { observable, action } from 'mobx';
import { SpaceApi, Space } from '../api/api';
import networkStore from './networkStore';

const spaceApi = new SpaceApi();

class SpaceStore {
  @observable logo: string;
  @observable name: string;
  @observable shortDescription: string;
  @observable longDescription: string;
  @observable host: string;

  constructor() {
    const space:SpaceStore = localStorage.getItem('space') ? JSON.parse(localStorage.getItem('space')) : {};
    this.logo = space.logo;
    this.name = space.name;
    this.shortDescription = space.shortDescription;
    this.longDescription = space.longDescription;
    this.host = space.host;
  }

  @action load(){
    networkStore.addPendingRequest();
    spaceApi.getSpace().then((space:Space) => {
      this.logo = space.logo;
      this.name = space.name;
      this.shortDescription = space.shortDescription;
      this.longDescription = space.longDescription;
      this.host = space.host;
      localStorage.setItem('space', JSON.stringify(space));
      networkStore.updateLastResponse({message:'OK', statusCode: 200});
      networkStore.removePendingRequest();
    }).catch((response:Response) => {
      networkStore.updateLastResponse({message:response.statusText, statusCode: response.status});
      networkStore.removePendingRequest();  
    });
  }
}

const spaceStore = new SpaceStore();

spaceStore.load();

export default spaceStore;