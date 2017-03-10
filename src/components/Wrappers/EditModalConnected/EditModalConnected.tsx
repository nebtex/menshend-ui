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
    csrf: this.store.csrf,
    impersonateWithinRole: this.store.impersonateWithinRole,
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
        <EditModal 
          isOpen={isOpen}
          toggle={toggle}
          codeOnChange={this.store.updateProxyCode}
          name={this.store.name}
          nameOnChange={this.store.updateName}
          nameError={this.store.nameError}
          logo={this.store.logo}
          logoOnChange={this.store.updateLogo}
          logoError={this.store.logoError}
          logoOnError={this.store.updateLogoError}
          shortDescription={this.store.shortDescription}
          shortDescriptionOnChange={this.store.updateShortDescription}
          longDescriptionUrl={this.store.longDescriptionUrl}
          longDescriptionUrlOnChange={this.store.updateLongDescriptionUrl}
          longDescriptionUrlActive={this.store.longDescriptionUrlActive}
          longDescriptionUrlActiveOnChange={this.store.updateLongDescriptionUrlActive}
          longDescription={this.store.longDescription}
          longDescriptionOnChange={this.store.updateLongDescription}
          longDescriptionUrlError={this.store.longDescriptionUrlError}
          cors={this.store.cors}
          cache={this.store.cache}
          secretPaths={this.store.secretPaths}
          strategy={this.store.strategy}
          csrf={this.store.csrf}
          impersonateWithinRole={this.store.impersonateWithinRole}
          isActive={this.store.isActive}
          strategies={this.store.strategies}
          handleAllowedOriginsAdd={this.store.addAllowedOrigin}
          handleAllowedOriginsDelete={this.store.deleteAllowedOrigin}
          handleAllowedMethodsAdd={this.store.addAllowedMethod}
          handleAllowedMethodsDelete={this.store.deleteAllowedMethod}
          handleAllowedHeadersAdd={this.store.addAllowedHeader}
          handleAllowedHeadersDelete={this.store.deleteAllowedHeader}
          handleExposedHeadersAdd={this.store.addExposedHeader}
          handleExposedHeadersDelete={this.store.deleteExposedHeader}
          maxAgeOnChange={this.store.updateMaxAge}
          optionsPassthroughOnChange={this.store.updateOptionsPassthrough}
          handleSaveService={this.store.saveService}
          allowCredentialsOnChange={this.store.updateAllowCredentials}
          cacheActiveOnChange={this.store.updateCacheActive}
          ttlOnChange={this.store.updateTTL}
          handleSecretPathsAdd={this.store.addSecretPath}
          handleSecretPathsDelete={this.store.deleteSecretPath}
          strategyOnChange={this.store.updateStrategy}
          csrfOnChange={this.store.updateCsrf}
          impersonateWithinRoleOnChange={this.store.updateImpersonateWithinRole}
          isActiveOnChange={this.store.updateIsActive} />
      </div>
    );
  }
}

export default EditModalConnected;