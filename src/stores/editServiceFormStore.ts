import omniFormStore, { OmniForm } from '../components/omniform/io.omniql.core/Builder';
import { BasePath, ownFetch } from './variables';
import { error } from 'util';

import { observable, action, ObservableMap, toJS, IObservableArray, computed } from 'mobx';
// import { AdminApi, AdminService, AdminServiceCache, AdminServiceCors, AdminServiceProxyCodeLanguageEnum, AdminServiceStrategyEnum } from '../api/api';
import { AdminApi, AdminService } from '../api/api';
import networkStore from './networkStore';

const urlRegExp = new RegExp('https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}');
const adminApi: AdminApi = new AdminApi();
adminApi.basePath = BasePath
adminApi.fetch = ownFetch;

class EditServiceFormStore {
  @observable roleId: string
  @observable subdomain: string
  @observable omniForm: OmniForm

  @observable loading: number
  @observable error: string
  @observable showModal: boolean
  @observable currentService: AdminService
  @computed get serviceId() {
    if (this.roleId == "" || this.subdomain == "") {
      return ""
    }
    return `roles/${this.roleId}/${this.subdomain}`
  }

  @computed get isNewService(): boolean {
    return this.serviceId == ""
  }
  @computed get currentServiceName(): string {
    if (this.currentService && this.currentService.meta) {
      return this.currentService.meta.name
    }
    return ""
  }
  @action load() {
    if (this.subdomain == "") {
      return
    }
    this.loading += 1
    networkStore.addPendingRequest()
    adminApi.adminGetService({ id: this.serviceId }).then((value: AdminService) => {
      this.currentService = value
      try {
        this.omniForm.load(value, omniFormStore)
      } catch (e) {
          console.log(e)
      }
      this.loading -= 1
      networkStore.removePendingRequest()
    }).catch((response: Response) => {
      this.loading -= 1
      response.json().then((value: { message: string }) => {
        this.error = value.message
      })
      networkStore.updateLastResponse({ message: response.statusText, statusCode: response.status });
      networkStore.removePendingRequest()
    })
  }
}

export default new EditServiceFormStore();