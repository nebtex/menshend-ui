import * as React from 'react';
import * as classnames from 'classnames';
import { IService } from '../../../models/interface';
import MonacoEditor from 'react-monaco-editor';
import EditModalBody from './EditModalBody/EditModalBody';
import EditModalHeader from './EditModalHeader/EditModalHeader';
let styles = require('./EditModal.scss');
import { Modal, ModalFooter, Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap';
import  FullModal from '../../modals/FullModal';
import { AdminServiceCache, AdminServiceCors } from '../../../api/api'; 

export interface IEditModalProps {
  isOpen: boolean;
  toggle: any;
  codeOnChange?: any;
  name?: string;
  subdomain?: string;
  subdomainOnChange?: any;
  subdomainError?: boolean;
  nameOnChange?: any;
  nameError?: boolean;
  logo?: string;
  logoOnChange?: any;
  logoError?: boolean;
  logoOnError?: any;
  shortDescription?: string;
  shortDescriptionOnChange?: any;
  longDescriptionUrl?: string;
  longDescriptionUrlOnChange?: any;
  longDescriptionUrlActive?: boolean;
  longDescriptionUrlActiveOnChange?: any;
  longDescription?: string;
  longDescriptionOnChange?: any;
  longDescriptionUrlError?: boolean;
  cache?:AdminServiceCache;
  cors?: AdminServiceCors;
  secretPaths?: string[];
  strategy?: string;
  csrf?: boolean;
  impersonateWithinRole?: boolean;
  isActive?: boolean;
  strategies?: any;
  handleAllowedOriginsAdd?: any;
  handleAllowedOriginsDelete?: any;
  handleAllowedMethodsAdd?: any;
  handleAllowedMethodsDelete?: any;
  handleAllowedHeadersAdd?: any;
  handleAllowedHeadersDelete?: any;
  handleExposedHeadersAdd?: any;
  handleExposedHeadersDelete?: any;
  maxAgeOnChange?: any;
  optionsPassthroughOnChange?: any;
  handleSaveService?: any;
  allowCredentialsOnChange?: any;
  cacheActiveOnChange?: any;
  ttlOnChange?: any;
  handleSecretPathsAdd?: any;
  handleSecretPathsDelete?: any;
  strategyOnChange?: any;
  csrfOnChange?: any;
  impersonateWithinRoleOnChange?: any;
  isActiveOnChange?: any;
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
    const title = this.props.name ? `Edit ${this.props.name}`: 'New service';

    return (
      <FullModal title={title} isOpen={this.props.isOpen} toggle={this.props.toggle} className={styles.modal}>
        <EditModalBody
          name={this.props.name}
          nameError={this.props.nameError}
          subdomain={this.props.subdomain}
          subdomainOnChange={this.props.subdomainOnChange}
          subdomainError={this.props.subdomainError}
          nameOnChange={this.props.nameOnChange}
          logo={this.props.logo}
          logoError={this.props.logoError}
          logoOnError={this.props.logoOnError}
          logoOnChange={this.props.logoOnChange}
          shortDescription={this.props.shortDescription}
          shortDescriptionOnChange={this.props.shortDescriptionOnChange}
          longDescription={this.props.longDescription}
          longDescriptionOnChange={this.props.longDescriptionOnChange}
          longDescriptionUrl={this.props.longDescriptionUrl}
          longDescriptionUrlError={this.props.longDescriptionUrlError}
          longDescriptionUrlOnChange={this.props.longDescriptionUrlOnChange}
          longDescriptionUrlActive={this.props.longDescriptionUrlActive}
          longDescriptionUrlActiveOnChange={this.props.longDescriptionUrlActiveOnChange}
          codeOnChange={this.props.codeOnChange}
          cors={this.props.cors}
          handleAllowedOriginsAdd={this.props.handleAllowedOriginsAdd}
          handleAllowedOriginsDelete={this.props.handleAllowedOriginsDelete}
          handleAllowedMethodsAdd={this.props.handleAllowedMethodsAdd}
          handleAllowedMethodsDelete={this.props.handleAllowedMethodsDelete}
          handleAllowedHeadersAdd={this.props.handleAllowedHeadersAdd}
          handleAllowedHeadersDelete={this.props.handleAllowedHeadersDelete}
          handleExposedHeadersAdd={this.props.handleExposedHeadersAdd}
          handleExposedHeadersDelete={this.props.handleExposedHeadersDelete}
          allowCredentialsOnChange={this.props.allowCredentialsOnChange}
          optionsPassthroughOnChange={this.props.optionsPassthroughOnChange}
          maxAgeOnChange={this.props.maxAgeOnChange}
          cache={this.props.cache}
          cacheActiveOnChange={this.props.cacheActiveOnChange}
          ttlOnChange={this.props.ttlOnChange}
          secretPaths={this.props.secretPaths}
          handleSecretPathsAdd={this.props.handleSecretPathsAdd}
          handleSecretPathsDelete={this.props.handleSecretPathsDelete}
          strategies={this.props.strategies}
          strategy={this.props.strategy}
          strategyOnChange={this.props.strategyOnChange}
          csrf={this.props.csrf}
          csrfOnChange={this.props.csrfOnChange}
          impersonateWithinRole={this.props.impersonateWithinRole}
          impersonateWithinRoleOnChange={this.props.impersonateWithinRoleOnChange}
          isActive={this.props.isActive}
          isActiveOnChange={this.props.isActiveOnChange} 
          activeTab={this.state.activeTab}
          toggleTab={this.toggleTab} />
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.props.handleSaveService}>Save</Button>{' '}
        </ModalFooter>
      </FullModal>
    );
  }
}