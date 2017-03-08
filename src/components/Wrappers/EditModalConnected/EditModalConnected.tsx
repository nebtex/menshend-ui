import * as React from 'react';
import { observer } from 'mobx-react';
import EditModal from '../../services/EditModal/EditModal';
import editServiceFormStore from '../../../stores/editServiceFormStore';

interface IEditModalConnected {
  isOpen: boolean;
  toggle: any;
}

@observer class EditModalConnected extends React.Component<IEditModalConnected, {}>{
  store = new editServiceFormStore();
  
  state = {
    roleId: this.store.roleId,
    logo: this.store.logo,
    name: this.store.name,
    shortDescription: this.store.shortDescription,
    longDescription: this.store.longDescription,
    longDescriptionUrl: this.store.longDescriptionUrl,
    proxyCode: this.store.proxyCode,
    csrf: this.store.csrf,
    impersonateWithinRole: this.store.impersonateWithinRole,
    proxyCodeLanguage: this.store.proxyCodeLanguage,
    isActive: this.store.isActive,
    strategy: this.store.strategy,
    cache: this.store.cache,
    cors: this.store.cors,
    secretPaths: this.store.secretPaths
  }

  render(){
    const { isOpen, toggle } = this.props;
    return (
      <div>
        <EditModal isOpen={isOpen} toggle={toggle}/>
      </div>
    );
  }
}

export default EditModalConnected;