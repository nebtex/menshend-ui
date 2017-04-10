import * as React from 'react';
import { observer } from 'mobx-react';
import Services from '../containers/Services';
import { toJS } from 'mobx';
import clientServiceStore from '../stores/clientServiceStore';
import loginStore from '../stores/loginStore';
import spaceStore from '../stores/spaceStore';

@observer class ServicesWrapper extends React.Component<{}, {}>{
  render() {
    const services = toJS(clientServiceStore.services);
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
          space={space} />
      </div>
    );
  }
}

export default ServicesWrapper;