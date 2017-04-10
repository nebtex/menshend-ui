import * as React from 'react';
import { observer } from 'mobx-react';
import Services from '../containers/Services';
import { toJS } from 'mobx';
import clientServiceStore from '../stores/clientServiceStore';
import loginStore from '../stores/loginStore';
import spaceStore from '../stores/spaceStore';
import router from '../stores/router';
import { views } from '../routes';

@observer class ServicesWrapper extends React.Component<{}, {}>{
  handleRoleNavigation = (roleId:string) => {
    router.goTo(views.servicesByRole, {roleId:roleId})
  }

  render() {
    const services = toJS(clientServiceStore.services);
    const activeRoleId = clientServiceStore.roleServicesList;

    const loginStatus = {
      isAdmin: loginStore.isAdmin,
      canImpersonate: loginStore.canImpersonate,
      sessionExpiresAt: loginStore.sessionExpiresAt,
      isLogged: loginStore.isLogged
    }

    const space = {
      name: spaceStore.name,
      host: spaceStore.host,
      logo: spaceStore.logo,
      longDescription: spaceStore.longDescription,
      shortDescription: spaceStore.shortDescription
    }

    return (
      <div>
        <Services 
          services={services}
          loginStatus={loginStatus}
          space={space} 
          activeRoleId={activeRoleId}
          handleRoleNavigation={this.handleRoleNavigation} />
      </div>
    );
  }
}

export default ServicesWrapper;