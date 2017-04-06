import { observable, action, ObservableMap, toJS, IObservableArray, computed } from 'mobx';
// import { AdminApi, AdminService, AdminServiceCache, AdminServiceCors, AdminServiceProxyCodeLanguageEnum, AdminServiceStrategyEnum } from '../api/api';
import { AdminApi, AdminService } from '../api/api';
import networkStore from './networkStore';

const urlRegExp = new RegExp('https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}');

class EditServiceFormStore {
  adminApi: AdminApi = new AdminApi();
  @observable roleId: string
  @observable subdomain: string
  @observable loading: number
  @observable currentService: AdminService
  @computed get serviceId() {
    if (this.roleId == "" || this.subdomain == "") {
      return ""
    }
    return `roles/${this.roleId}/${this.subdomain}`
  }
  @action load() {
    if (this.subdomain == "") {
      return
    }
    this.loading += 1
    networkStore.addPendingRequest()
    this.adminApi.adminGetService({ id: this.serviceId }).then((value: AdminService) => {
      this.currentService = value
      this.loading -= 1
      networkStore.removePendingRequest()
    }).catch((response: Response) => {

    }

      )
  }

}

export default new EditServiceFormStore();