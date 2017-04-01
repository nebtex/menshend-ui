import * as React from 'react';
import { observer } from 'mobx-react';
import EditModal from '../components/services/EditModal/EditModal';
import editServiceFormStore from '../stores/editServiceFormStore';

interface IEditModalConnectedState {
  isOpen: boolean;
}

@observer class EditModalWrapper extends React.Component<{}, IEditModalConnectedState>{
  state = {
    isOpen: true
  }

  toggle = () => {
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

  render(){
    const { isOpen } = this.state;
    return (
      <div>
        <EditModal 
          store={editServiceFormStore}
          isOpen={isOpen}
          toggle={this.toggle}
       />
      </div>
    );
  }
}

export default EditModalWrapper;