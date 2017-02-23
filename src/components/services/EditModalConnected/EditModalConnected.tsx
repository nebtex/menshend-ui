import * as React from 'react';
import { observer } from 'mobx-react';
import editServiceFormStore from '../../../states/editServiceFormStore';

@observer class EditModalConnected extends React.Component<{}, {}>{
  store = editServiceFormStore;
  render(){
    return (
      <div>

      </div>
    );
  }
}

export default EditModalConnected;