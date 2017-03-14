import * as React from 'react';
import { observer } from 'mobx-react';
import EditModal from '../../services/EditModal/EditModal';
import editServiceFormStore from '../../../stores/editServiceFormStore';

interface IEditModalConnected {
  isOpen: boolean;
  toggle: any;
  params: any;
}

@observer class EditModalWrapper extends React.Component<IEditModalConnected, {}>{
  store = editServiceFormStore;

  render(){
    const { isOpen, toggle } = this.props;
    const { role, subdomain } = this.props.params;

    return (
      <div>
        <EditModal 
          isOpen={isOpen}
          toggle={toggle}
          codeOnChange={this.store.updateProxyCode}
          name={this.store.name}
          subdomain={this.store.subdomain}
          subdomainOnChange={this.store.updateSubdomain}
          subdomainError={this.store.subdomainError}
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
          codeLanguage={this.store.proxyCodeLanguage}
          codeLanguageOnChange={this.store.updateProxyCodeLanguage}
          csrf={this.store.csrf}
          impersonateWithinRole={this.store.impersonateWithinRole}
          isActive={this.store.isActive}
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

export default EditModalWrapper;