import {observable, action, toJS} from "mobx";
import networkStore from "./networkStore";
import {ClientApi, ClientService} from "../api/api";
import {ownFetch, BasePath} from "./variables";
declare var localStorage:any
const clientApi = new ClientApi();
clientApi.basePath = BasePath;
clientApi.fetch = ownFetch;


class ClientServiceStore {
    @observable services: Array<ClientService>
    @observable currentService: ClientService
    @observable currentRole: string
    @observable availableRoles: Array<string>
    @observable roleServicesList: string
    @observable queryTag: string
    @observable currentDomain: string

    constructor() {
        const storagedServices: ClientService[] = localStorage && localStorage.getItem('clientServices') ? JSON.parse(localStorage.getItem('clientServices')) : [];
        this.services = storagedServices;
    }

    @action updateCurrentService = (subdomain: string) => {
        this.currentDomain = subdomain.endsWith('.') ? subdomain : subdomain + '.';
        const obtainedServices = toJS(this.services).filter((service) => {
            if (!service) return false
            if (!service) return false
            if (!service.meta) return false

            return service.meta.subDomain === this.currentDomain
        })
        const obtainedRoles = obtainedServices.map(service => service && service.meta && service.meta.roleId)

        if ((this.currentService && this.currentService.meta && this.currentService.meta.subDomain !== obtainedServices[0].meta.subDomain) || !this.currentRole) {
            this.currentRole = obtainedServices[0] && obtainedServices[0].meta.roleId
        }

        this.availableRoles = obtainedRoles
        this.currentService = obtainedServices[0]
    }

    @action updateRole = (role: string) => {
        const obtainedService = this.services.filter(service => ( service && service.meta && (service.meta.roleId === role && service.meta.subDomain === this.currentDomain)))[0]
        this.currentService = obtainedService
        this.currentRole = role
    }

    @action updateRoleServicesList = (roleId: string) => {
        this.roleServicesList = roleId;
    }

    @action updateQueryTag = (tag: string) => {
        this.queryTag = tag;
    }

    @action load() {
        networkStore.addPendingRequest();
        clientApi.listAvailableServices({}).then((services: ClientService[]) => {
            this.services = services;
            console.log(services)
            localStorage.setItem('clientServices', JSON.stringify(services));
            this.updateCurrentService(this.currentDomain);
            networkStore.updateLastResponse({message: 'OK', statusCode: 200});
            networkStore.removePendingRequest();
        }).catch((response: Response) => {
            networkStore.updateLastResponse({
                message: response.statusText,
                statusCode: response.status
            });
            networkStore.removePendingRequest();
        });
    }
}

const clientServiceStore: ClientServiceStore = new ClientServiceStore();

clientServiceStore.load();

export default clientServiceStore; 