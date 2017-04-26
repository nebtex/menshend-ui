import * as React from 'react';
import { observer } from 'mobx-react';
import Login from '../containers/Login';
import { toJS } from 'mobx';
import loginStore from '../stores/loginStore';
import networkStore from '../stores/networkStore';
import flashStore from '../stores/flashStore';
import spaceStore from '../stores/spaceStore';
import router from '../stores/router';
import { views } from '../routes';
import clientServiceStore from '../stores/clientServiceStore';

@observer class LoginWrapper extends React.Component<{}, {}>{
  handleRoleUpdate = (role:string) => {
    clientServiceStore.updateRole(role)
  }

  handleTagNavigation = (tag:string) => {
    router.goTo(views.services, null, null, {tag:tag})
  }

  render() {
    const flashes = flashStore.flashes;
    const space = {
      name: spaceStore.name,
      host: spaceStore.host,
      logo: spaceStore.logo,
      longDescription: spaceStore.longDescription,
      shortDescription: spaceStore.shortDescription
    }
    const loginError = loginStore.loginError;
    const loginStatus = {
      isAdmin: loginStore.isAdmin,
      canImpersonate: loginStore.canImpersonate,
      sessionExpiresAt: loginStore.sessionExpiresAt,
      isLogged: loginStore.isLogged
    }

    const currentService = toJS(clientServiceStore.currentService);
    const currentDomain = clientServiceStore.currentDomain;

    const loadingLogin = loginStore.loading;
    
    const availableRoles = toJS(clientServiceStore.availableRoles)
    const currentRole = clientServiceStore.currentRole

    return (
      <div>
        <Login 
          flashes={flashes}
          space={space}
          loginError={loginError}
          loginStatus={loginStatus} 
          service={currentService} 
          loading={loadingLogin} 
          availableRoles={availableRoles}
          currentRole={currentRole}
          handleRoleUpdate={this.handleRoleUpdate} 
          handleTagNavigation={this.handleTagNavigation}
          currentDomain={currentDomain}/>
      </div>
    );
  }
}

export default LoginWrapper;