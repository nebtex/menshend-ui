import * as React from 'react';
import * as classnames from 'classnames';
import NavBar from './NavBar/NavBar';
import GeneralSection from './GeneralSection/GeneralSection';
import ShortDescriptionSection from './ShortDescriptionSection/ShortDescriptionSection';
import LongDescriptionSection from './LongDescriptionSection/LongDescriptionSection';
import CacheSection from './CacheSection/CacheSection';
import CorsSection from './CorsSection/CorsSection';
import SecretPathsSection from './SecretPathsSection/SecretPathsSection';
import BackendSection from './BackendSection/BackendSection';
import { ModalBody, TabContent } from 'reactstrap';

let styles = require('./EditModalBody.scss');
         
export interface IEditModalBodyProps {
  activeTab?: string;
  toggleTab: any;
  name?: string;
  nameError?: boolean;
  nameOnChange: any;
  logo?: string;
  logoError?: boolean;
  logoOnError: any;
  logoOnChange: any;
  shortDescription?: string;
  shortDescriptionOnChange: any;
  longDescription?: string;
  longDescriptionOnChange: any;
  longDescriptionUrl?: string;
  longDescriptionUrlOnChange: any;
  longDescriptionUrlActive?: boolean;
  longDescriptionUrlActiveOnChange: any;
  dropdownOpen?: boolean;
  toggleDropdown: any;
  codeOnChange: any;
  longDescriptionUrlError:boolean;
  allowedOrigins?: string[];
  handleAllowedOriginsAdd?: any;
  handleAllowedOriginsDelete?: any;
  allowedMethods?: string[];
  handleAllowedMethodsAdd?: any;
  handleAllowedMethodsDelete?: any;
  allowedHeaders?: string[];
  handleAllowedHeadersAdd?: any;
  handleAllowedHeadersDelete?: any;
  exposedHeaders?: string[];
  handleExposedHeadersAdd?: any;
  handleExposedHeadersDelete?: any;
  allowCredentials?: boolean;
  optionsPassthrough?: boolean;
  maxAge?: boolean;
  allowCredentialsOnChange?: any;
  optionsPassthroughOnChange?: any;
  maxAgeOnChange?: any;
  cacheActive?: boolean;
  cacheActiveOnChange?: any;
  ttl?: number;
  ttlOnChange?: any;
  secretPaths?: string[];
  handleSecretPathsAdd?: any;
  handleSecretPathsDelete?: any;
  strategies?: any;
  strategy?: number;
  strategyOnChange?: any;
  csrf?: boolean;
  csrfOnChange?: any;
  impersonateWithinRole?: boolean;
  impersonateWithinRoleOnChange?: any;
  isActive?: boolean;
  isActiveOnChange?: any;
}

const DEFAULT_LOGO = 'https://placehold.it/64x64';

export default class EditModalBody extends React.Component<IEditModalBodyProps,{}>{
  static defaultProps = {
    activeTab: 'general',
    name: 'Unknown service',
    nameError: false,
    logo: DEFAULT_LOGO,
    logoError: false,
    shortDescription: '',
    longDescription: '',
    longDescriptionUrl: '',
    longDescriptionUrlActive: false,
    dropdownOpen: false
  }

  render() {
    return (
      <ModalBody>
        <div>
          <NavBar activeTab={this.props.activeTab} toggleTab={this.props.toggleTab}/>
          <TabContent activeTab={this.props.activeTab}>
            <GeneralSection
              name={this.props.name}
              nameError={this.props.nameError}
              nameOnChange={this.props.nameOnChange}
              logo={this.props.logo}
              logoOnChange={this.props.logoOnChange}
              logoError={this.props.logoError}
              logoOnError={this.props.logoOnError}/>
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
              cacheActive={this.props.cacheActive}
              cacheActiveOnChange={this.props.cacheActiveOnChange}
              ttl={this.props.ttl}
              ttlOnChange={this.props.ttlOnChange} />
            <CorsSection
              allowCredentials={this.props.allowCredentials}
              allowCredentialsOnChange={this.props.allowCredentialsOnChange}
              optionsPassthrough={this.props.optionsPassthrough}
              optionsPassthroughOnChange={this.props.optionsPassthroughOnChange}
              maxAge={this.props.maxAge}
              maxAgeOnChange={this.props.maxAgeOnChange}
              allowedOrigins={this.props.allowedOrigins}
              handleAllowedOriginsAdd={this.props.handleAllowedOriginsAdd}
              handleAllowedOriginsDelete={this.props.handleAllowedOriginsDelete}
              allowedMethods={this.props.allowedMethods}
              handleAllowedMethodsAdd={this.props.handleAllowedMethodsAdd}
              handleAllowedMethodsDelete={this.props.handleAllowedMethodsDelete}
              allowedHeaders={this.props.allowedHeaders}
              handleAllowedHeadersAdd={this.props.handleAllowedHeadersAdd}
              handleAllowedHeadersDelete={this.props.handleAllowedHeadersDelete}
              exposedHeaders={this.props.exposedHeaders}
              handleExposedHeadersAdd={this.props.handleExposedHeadersAdd}
              handleExposedHeadersDelete={this.props.handleExposedHeadersDelete} />
            <SecretPathsSection
              secretPaths={this.props.secretPaths}
              handleSecretPathsAdd={this.props.handleSecretPathsAdd}
              handleSecretPathsDelete={this.props.handleSecretPathsDelete} />
          </TabContent>  
        </div>
        <hr/>
        <BackendSection 
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
      </ModalBody>
    );
  }
}