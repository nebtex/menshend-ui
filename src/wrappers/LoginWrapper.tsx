import * as React from 'react';
import { observer } from 'mobx-react';
import Login from '../containers/Login';

import loginStore from '../stores/loginStore';
import networkStore from '../stores/networkStore';
import flashStore from '../stores/flashStore';
import spaceStore from '../stores/spaceStore';

@observer class LoginWrapper extends React.Component<{}, {}>{
  render() {
    const flashes = flashStore.flashes;
    const space = {
      host: spaceStore.host,
      logo: spaceStore.logo,
      longDescription: spaceStore.longDescription,
      shortDescription: spaceStore.shortDescription
    }

    return (
      <div>
        <Login flashes={flashes} space={space}/>
      </div>
    );
  }
}

export default LoginWrapper;