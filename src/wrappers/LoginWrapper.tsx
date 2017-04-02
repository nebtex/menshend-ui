import * as React from 'react';
import { observer } from 'mobx-react';
import Login from '../containers/Login';

import loginStore from '../stores/loginStore';
import networkStore from '../stores/networkStore';
import flashStore from '../stores/flashStore';
import spaceStore from '../stores/spaceStore';

interface ILoginWrapperProps {
  location?: any;
  params?: any;
  route?: any;
  routeParams?: any;
  router?: any;
  routes?: any;
}

@observer class LoginWrapper extends React.Component<ILoginWrapperProps, {}>{
  render() {
    if(this.props.location.query.loginError)
      loginStore.updateLoginError(this.props.location.query.loginError);
    
    const flashes = flashStore.flashes;
    const space = {
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
    
    return (
      <div>
        <Login 
          flashes={flashes}
          space={space}
          loginError={loginError}
          loginStatus={loginStatus} />
      </div>
    );
  }
}

export default LoginWrapper;