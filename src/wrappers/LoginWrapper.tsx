import * as React from 'react';
import { observer } from 'mobx-react';
import Login from '../containers/Login';
import { toJS } from 'mobx';
import loginStore from '../stores/loginStore';
import networkStore from '../stores/networkStore';
import flashStore from '../stores/flashStore';
import spaceStore from '../stores/spaceStore';
import clientServiceStore from '../stores/clientServiceStore';

@observer class LoginWrapper extends React.Component<{}, {}>{
  handleRoleUpdate = (role:string) => {
    clientServiceStore.updateRole(role)
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
          handleRoleUpdate={this.handleRoleUpdate} />
      </div>
    );
  }
}

export default LoginWrapper;