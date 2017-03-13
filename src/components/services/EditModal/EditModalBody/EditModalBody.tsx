import * as React from 'react';
import * as classnames from 'classnames';
import NavBar from './NavBar/NavBar';
import GeneralSection from './GeneralSection/GeneralSection';
import ShortDescriptionSection from './ShortDescriptionSection/ShortDescriptionSection';
import LongDescriptionSection from './LongDescriptionSection/LongDescriptionSection';
import CacheSection from './CacheSection/CacheSection';
import CorsSection from './CorsSection/CorsSection';
import SecretPathsSection from './SecretPathsSection/SecretPathsSection';
import { ModalBody, TabContent } from 'reactstrap';
import { AdminServiceCache, AdminServiceCors } from '../../../../api/api';

let styles = require('./EditModalBody.scss');
         
export interface IEditModalBodyProps {
  name?: string;
  nameError?: boolean;
  nameOnChange?: any;
  subdomain?: string;
  subdomainOnChange?: any;
  subdomainError?: boolean;
  logo?: string;
  logoError?: boolean;
  logoOnError?: any;
  logoOnChange?: any;
  shortDescription?: string;
  shortDescriptionOnChange?: any;
  longDescription?: string;
  longDescriptionOnChange?: any;
  longDescriptionUrl?: string;
  longDescriptionUrlOnChange?: any;
  longDescriptionUrlActive?: boolean;
  longDescriptionUrlActiveOnChange?: any;
  codeOnChange?: any;
  longDescriptionUrlError?:boolean;
  cors?: AdminServiceCors;
  handleAllowedOriginsAdd?: any;
  handleAllowedOriginsDelete?: any;
  handleAllowedMethodsAdd?: any;
  handleAllowedMethodsDelete?: any;
  handleAllowedHeadersAdd?: any;
  handleAllowedHeadersDelete?: any;
  handleExposedHeadersAdd?: any;
  handleExposedHeadersDelete?: any;
  allowCredentialsOnChange?: any;
  optionsPassthroughOnChange?: any;
  maxAgeOnChange?: any;
  cache?: AdminServiceCache;
  cacheActiveOnChange?: any;
  ttlOnChange?: any;
  secretPaths?: string[];
  handleSecretPathsAdd?: any;
  handleSecretPathsDelete?: any;
  strategies?: any;
  strategy?: string;
  strategyOnChange?: any;
  csrf?: boolean;
  csrfOnChange?: any;
  impersonateWithinRole?: boolean;
  impersonateWithinRoleOnChange?: any;
  isActive?: boolean;
  isActiveOnChange?: any;
  activeTab?: string;
  toggleTab?: any;
}

const DEFAULT_LOGO = 'https://placehold.it/64x64';

export default class EditModalBody extends React.Component<IEditModalBodyProps, {}>{
  render() {
    //@TODO: Show the corresponding tab taking into account the errors
    return (
      <ModalBody>
        <div>
          <NavBar activeTab={this.props.activeTab} toggleTab={this.props.toggleTab}/>
          <TabContent activeTab={this.props.activeTab}>
            <GeneralSection
              name={this.props.name}
              nameError={this.props.nameError}
              nameOnChange={this.props.nameOnChange}
              subdomain={this.props.subdomain}
              subdomainOnChange={this.props.subdomainOnChange}
              subdomainError={this.props.subdomainError}
              logo={this.props.logo}
              logoOnChange={this.props.logoOnChange}
              logoError={this.props.logoError}
              logoOnError={this.props.logoOnError}
              codeOnChange={this.props.codeOnChange} 
              strategy={this.props.strategy}
              strategyOnChange={this.props.strategyOnChange}
              csrf={this.props.csrf}
              csrfOnChange={this.props.csrfOnChange}
              impersonateWithinRole={this.props.impersonateWithinRole}
              impersonateWithinRoleOnChange={this.props.impersonateWithinRoleOnChange}
              isActive={this.props.isActive}
              isActiveOnChange={this.props.isActiveOnChange} 
              strategies={this.props.strategies} />
            <ShortDescriptionSection 
              shortDescription={this.props.shortDescription} 
              shortDescriptionOnChange={this.props.shortDescriptionOnChange} />
            <LongDescriptionSection
              longDescriptionUrlActive={this.props.longDescriptionUrlActive}
              longDescriptionUrlActiveOnChange={this.props.longDescriptionUrlActiveOnChange}
              longDescription={this.props.longDescription}
              longDescriptionOnChange={this.props.longDescriptionOnChange}
              longDescriptionUrlOnChange={this.props.longDescriptionUrlOnChange}
              longDescriptionUrl={this.props.longDescriptionUrl}
              longDescriptionUrlError={this.props.longDescriptionUrlError} />
            <CacheSection
              cache={this.props.cache} 
              cacheActiveOnChange={this.props.cacheActiveOnChange}
              ttlOnChange={this.props.ttlOnChange} />
            <CorsSection
              cors={this.props.cors}
              allowCredentialsOnChange={this.props.allowCredentialsOnChange}
              optionsPassthroughOnChange={this.props.optionsPassthroughOnChange}
              maxAgeOnChange={this.props.maxAgeOnChange}
              handleAllowedOriginsAdd={this.props.handleAllowedOriginsAdd}
              handleAllowedOriginsDelete={this.props.handleAllowedOriginsDelete}
              handleAllowedMethodsAdd={this.props.handleAllowedMethodsAdd}
              handleAllowedMethodsDelete={this.props.handleAllowedMethodsDelete}
              handleAllowedHeadersAdd={this.props.handleAllowedHeadersAdd}
              handleAllowedHeadersDelete={this.props.handleAllowedHeadersDelete}
              handleExposedHeadersAdd={this.props.handleExposedHeadersAdd}
              handleExposedHeadersDelete={this.props.handleExposedHeadersDelete} />
            <SecretPathsSection
              secretPaths={this.props.secretPaths}
              handleSecretPathsAdd={this.props.handleSecretPathsAdd}
              handleSecretPathsDelete={this.props.handleSecretPathsDelete} />
          </TabContent>  
        </div>
      </ModalBody>
    );
  }
}