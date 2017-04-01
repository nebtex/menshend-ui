import * as React from 'react';
import { observer } from 'mobx-react';
import Login from '../containers/Login';

import loginStore from '../stores/loginStore';
import networkStore from '../stores/networkStore';
import flashStore from '../stores/flashStore';
import spaceStore from '../stores/spaceStore';

@observer class LoginWrapper extends React.Component<{}, {}>{
  render() {
    return (
      <div>
        <Login flashes={flashStore.flashes}/>
      </div>
    );
  }
}

export default LoginWrapper;