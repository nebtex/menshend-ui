import * as React from 'react';
import * as classnames from 'classnames';
import { IService } from '../../../models/interface';
import MonacoEditor from 'react-monaco-editor';
import EditModalBody from './EditModalBody/EditModalBody';
import EditModalHeader from './EditModalHeader/EditModalHeader';
import { Modal, ModalFooter, Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap';
import  FullModal from '../../modals/FullModal';
import { AdminServiceCache, AdminServiceCors } from '../../../api/api';
let styles = require('./EditModal.scss');

export interface IEditModalProps {
  isOpen: boolean;
  toggle: any;
  store: any;
}

const DEFAULT_LOGO = 'https://placehold.it/64x64',
      SHORT_DESCRIPTION_LENGTH = 100;

interface IEditModalState {
  activeTab: string;
}

export default class EditModal extends React.Component<IEditModalProps, IEditModalState>{
  state = {
    activeTab: 'general'
  }

  toggleTab = (tab:string) => {
    this.setState({
      activeTab: tab
    });
  }

  render(){
    const { store } = this.props;
    const title = store.name ? `Edit ${store.name}`: 'New service';

    return (
      <FullModal title={title} isOpen={this.props.isOpen} toggle={this.props.toggle} className={styles.modal}>
        <EditModalBody
          toggleTab={this.toggleTab}
          activeTab={this.state.activeTab}
          codeOnChange={store.updateProxyCode}
          name={store.name}
          subdomain={store.subdomain}
          subdomainOnChange={store.updateSubdomain}
          subdomainError={store.subdomainError}
          nameOnChange={store.updateName}
          nameError={store.nameError}
          logo={store.logo}
          logoOnChange={store.updateLogo}
          logoError={store.logoError}
          logoOnError={store.updateLogoError}
          shortDescription={store.shortDescription}
          shortDescriptionOnChange={store.updateShortDescription}
          longDescriptionUrl={store.longDescriptionUrl}
          longDescriptionUrlOnChange={store.updateLongDescriptionUrl}
          longDescriptionUrlActive={store.longDescriptionUrlActive}
          longDescriptionUrlActiveOnChange={store.updateLongDescriptionUrlActive}
          longDescription={store.longDescription}
          longDescriptionOnChange={store.updateLongDescription}
          longDescriptionUrlError={store.longDescriptionUrlError}
          cors={store.cors}
          cache={store.cache}
          secretPaths={store.secretPaths}
          strategy={store.strategy}
          codeLanguage={store.proxyCodeLanguage}
          codeLanguageOnChange={store.updateProxyCodeLanguage}
          csrf={store.csrf}
          impersonateWithinRole={store.impersonateWithinRole}
          isActive={store.isActive}
          handleAllowedOriginsAdd={store.addAllowedOrigin}
          handleAllowedOriginsDelete={store.deleteAllowedOrigin}
          handleAllowedMethodsAdd={store.addAllowedMethod}
          handleAllowedMethodsDelete={store.deleteAllowedMethod}
          handleAllowedHeadersAdd={store.addAllowedHeader}
          handleAllowedHeadersDelete={store.deleteAllowedHeader}
          handleExposedHeadersAdd={store.addExposedHeader}
          handleExposedHeadersDelete={store.deleteExposedHeader}
          maxAgeOnChange={store.updateMaxAge}
          optionsPassthroughOnChange={store.updateOptionsPassthrough}
          allowCredentialsOnChange={store.updateAllowCredentials}
          cacheActiveOnChange={store.updateCacheActive}
          ttlOnChange={store.updateTTL}
          handleSecretPathsAdd={store.addSecretPath}
          handleSecretPathsDelete={store.deleteSecretPath}
          strategyOnChange={store.updateStrategy}
          csrfOnChange={store.updateCsrf}
          impersonateWithinRoleOnChange={store.updateImpersonateWithinRole}
          isActiveOnChange={store.updateIsActive} />
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={store.handleSaveService}>Save</Button>{' '}
        </ModalFooter>
      </FullModal>
    );
  }
}