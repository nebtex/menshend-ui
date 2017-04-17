import * as React from 'react';
import { observer } from 'mobx-react';
import Services from '../containers/Services';
import { toJS } from 'mobx';
import clientServiceStore from '../stores/clientServiceStore';
import loginStore from '../stores/loginStore';
import spaceStore from '../stores/spaceStore';
import router from '../stores/router';
import { views } from '../routes';
let styles = require('./ServicesWrapper.scss');

@observer class ServicesWrapper extends React.Component<{}, {}>{
  handleRoleNavigation = (roleId:string) => {
    router.goTo(views.servicesByRole, {roleId:roleId});
  }

  handleTagNavigation = (tag:string) => {
    router.goTo(views.services, null, null, {tag:tag})
  }

  render() {
    const services = toJS(clientServiceStore.services);
    const activeRoleId = clientServiceStore.roleServicesList;
    const queryTag = clientServiceStore.queryTag;
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
      <div className={styles.container}>
        <Services 
          services={services}
          loginStatus={loginStatus}
          space={space} 
          activeRoleId={activeRoleId}
          handleRoleNavigation={this.handleRoleNavigation}
          handleTagNavigation={this.handleTagNavigation}
          queryTag={queryTag} />
      </div>
    );
  }
}

export default ServicesWrapper;