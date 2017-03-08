import * as React from 'react';
import * as classnames from 'classnames';
import { IService } from '../../../models/interface';
import MonacoEditor from 'react-monaco-editor';
import EditModalBody from './EditModalBody/EditModalBody';
import EditModalHeader from './EditModalHeader/EditModalHeader';
let styles = require('./EditModal.scss');
import { Modal, ModalFooter, Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap';
import  FullModal from '../../modals/FullModal';


export interface IEditModalProps {
  isOpen: boolean;
  toggle: any;
  service?: IService;
}

//@TODO: translate the corresponding state vars into props
interface IEditModalState {
  dropdownOpen: boolean;
  activeTab: string;
  backendRule: string; //Prop
  name: string; //Prop
  nameError: boolean;
  logo: string; //Prop
  logoError: boolean;
  shortDescription: string; //Prop
  longDescriptionUrl: string; //Prop
  longDescriptionUrlActive: boolean;
  longDescription: string; //Prop
  longDescriptionUrlError: boolean;
  allowedOrigins: string[];//Prop
  allowedMethods: string[];//Prop
  allowedHeaders: string[];//Prop
  exposedHeaders: string[];//Prop
  allowCredentials: boolean;//Prop
  optionsPassthrough: boolean;//Prop
  maxAge: boolean;//Prop
  ttl: number;//Prop
  cacheActive: boolean;//Prop
  secretPaths: string[];//Prop
}

const DEFAULT_LOGO = 'https://placehold.it/64x64',
      SHORT_DESCRIPTION_LENGTH = 100;

const urlRegExp = new RegExp('https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}');

export default class EditModal extends React.Component<IEditModalProps, IEditModalState>{
  
  constructor(props:IEditModalProps){
    super(props);
    this.state = {
      activeTab: 'general',
      backendRule: '',
      dropdownOpen: false,
      name: this.props.service ? this.props.service.name : 'Unknown service',
      nameError: false,
      logo: this.props.service ? this.props.service.logo : DEFAULT_LOGO,
      logoError: false,
      shortDescription: this.props.service ? this.props.service.short_description : '',
      longDescriptionUrl: '',
      longDescriptionUrlActive: false,
      longDescription: this.props.service ? this.props.service.long_description : '',
      longDescriptionUrlError: false,
      //@TODO: Remove this mock data, this data should be get from mobx store through the wrapper
      allowedOrigins: ['mock1', 'mock2', 'mock3'],
      allowedMethods: ['mock1', 'mock2', 'mock3'],
      allowedHeaders: ['mock1', 'mock2', 'mock3'],
      exposedHeaders: ['mock1', 'mock2', 'mock3'],
      allowCredentials: true,
      optionsPassthrough: true,
      maxAge: true,
      ttl: 120,
      cacheActive: true,
      secretPaths: ['secret1', 'secret2']
    }
  }

  toggleTab = (tab:string) => {
    this.setState({
      activeTab: tab
    });
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  codeOnChange = (newValue:string) => {
    this.setState({
      backendRule: newValue
    });
  }

  nameOnChange = (e:any) => {
    this.setState({
      name: e.target.value
    });
  }

  logoOnChange = (e:any) => {
    this.setState({
      logo: e.target.value,
      logoError: false
    });
  }

  logoOnError = () => {
    this.setState({
      logoError: true
    });
  }

  longDescriptionUrlOnChange = (e:any) => {
    this.setState({
      longDescriptionUrl: e.target.value
    });
  }

  longDescriptionUrlActiveOnChange = (e:any) => {
    this.setState({
      longDescriptionUrlActive: !this.state.longDescriptionUrlActive
    });
  }

  shortDescriptionOnChange = (e:any) => {
    this.setState({
      shortDescription: e.target.value.substring(0, SHORT_DESCRIPTION_LENGTH)
    });
  }

  longDescriptionOnChange = (e:any) => {
    this.setState({
      longDescription: e.target.value
    });
  }

  saveService = () => {
    const nameError = this.state.name.trim() === '',
          longDescriptionUrlError = !urlRegExp.test(this.state.longDescriptionUrl) || 
                                    (this.state.longDescriptionUrl === '' && this.state.longDescriptionUrlActive);

    if(!nameError && !longDescriptionUrlError){
      // @TODO: Send data here
      console.log('There are no errors');
    }else{
      const activeTab = nameError ? 'general' : ( longDescriptionUrlError ? 'longDescription': this.state.activeTab);
      this.setState({
        nameError,
        longDescriptionUrlError,
        activeTab
      });
    }
  }

  handleAllowedOriginsAdd = (allowedOrigin:string) => {
    if(this.state.allowedOrigins.includes(allowedOrigin)) return;
    let allowedOrigins = this.state.allowedOrigins;
    allowedOrigins.push(allowedOrigin);
    this.setState({allowedOrigins:allowedOrigins});
  }

  handleAllowedOriginsDelete = (allowedOrigin:string) => {
    if(!this.state.allowedOrigins.includes(allowedOrigin)) return;
    const index = this.state.allowedOrigins.indexOf(allowedOrigin);
    let allowedOrigins = this.state.allowedOrigins;
    allowedOrigins.splice(index, 1);
    this.setState({allowedOrigins:allowedOrigins});
  }

  handleAllowedMethodsAdd = (allowedMethod:string) => {
    if(this.state.allowedMethods.includes(allowedMethod)) return;
    let allowedMethods = this.state.allowedMethods;
    allowedMethods.push(allowedMethod);
    this.setState({allowedMethods:allowedMethods});
  }

  handleAllowedMethodsDelete = (allowedMethod:string) => {
    if(!this.state.allowedMethods.includes(allowedMethod)) return;
    const index = this.state.allowedMethods.indexOf(allowedMethod);
    let allowedMethods = this.state.allowedMethods;
    allowedMethods.splice(index, 1);
    this.setState({allowedMethods:allowedMethods});
  }

  handleAllowedHeadersAdd = (allowedHeader:string) => {
    if(this.state.allowedHeaders.includes(allowedHeader)) return;
    let allowedHeaders = this.state.allowedHeaders;
    allowedHeaders.push(allowedHeader);
    this.setState({allowedHeaders:allowedHeaders});
  }

  handleAllowedHeadersDelete = (allowedHeader:string) => {
    if(!this.state.allowedHeaders.includes(allowedHeader)) return;
    const index = this.state.allowedHeaders.indexOf(allowedHeader);
    let allowedHeaders = this.state.allowedHeaders;
    allowedHeaders.splice(index, 1);
    this.setState({allowedHeaders:allowedHeaders});
  }

  handleExposedHeadersAdd = (exposedHeader:string) => {
    if(this.state.exposedHeaders.includes(exposedHeader)) return;
    let exposedHeaders = this.state.exposedHeaders;
    exposedHeaders.push(exposedHeader);
    this.setState({exposedHeaders:exposedHeaders});
  }

  handleExposedHeadersDelete = (exposedHeader:string) => {
    if(!this.state.exposedHeaders.includes(exposedHeader)) return;
    const index = this.state.exposedHeaders.indexOf(exposedHeader);
    let exposedHeaders = this.state.exposedHeaders;
    exposedHeaders.splice(index, 1);
    this.setState({exposedHeaders:exposedHeaders});
  }

  maxAgeOnChange = (evt:any) => {
    this.setState({
      maxAge: !this.state.maxAge
    });
  }

  optionsPassthroughOnChange = (evt:any) => {
    this.setState({
      optionsPassthrough: !this.state.optionsPassthrough
    });
  }

  allowCredentialsOnChange = (evt:any) => {
    this.setState({
      allowCredentials: !this.state.allowCredentials
    });
  }

  cacheActiveOnChange = (evt:any) => {
    this.setState({
      cacheActive: !this.state.cacheActive
    });
  }

  ttlOnChange = (evt:any) => {
    this.setState({
      ttl: evt.target.value
    });
  }

  handleSecretPathsAdd = (secretPath:string) => {
    if(this.state.secretPaths.includes(secretPath)) return;
    let secretPaths = this.state.secretPaths;
    secretPaths.push(secretPath);
    this.setState({secretPaths:secretPaths});
  }

  handleSecretPathsDelete = (secretPath:string) => {
    if(!this.state.secretPaths.includes(secretPath)) return;
    const index = this.state.secretPaths.indexOf(secretPath);
    let secretPaths = this.state.secretPaths;
    secretPaths.splice(index, 1);
    this.setState({secretPaths:secretPaths});
  }

  render(){
    const title = this.props.service ? `Edit ${this.props.service.name}`: 'New service';

    return (
      <FullModal title={title} isOpen={this.props.isOpen} toggle={this.props.toggle} className={styles.modal}>
        <EditModalBody 
          activeTab={this.state.activeTab}
          toggleTab={this.toggleTab}
          name={this.state.name}
          nameError={this.state.nameError}
          nameOnChange={this.nameOnChange}
          logo={this.state.logo}
          logoError={this.state.logoError}
          logoOnError={this.logoOnError}
          logoOnChange={this.logoOnChange}
          shortDescription={this.state.shortDescription}
          shortDescriptionOnChange={this.shortDescriptionOnChange}
          longDescription={this.state.longDescription}
          longDescriptionOnChange={this.longDescriptionOnChange}
          longDescriptionUrl={this.state.longDescriptionUrl}
          longDescriptionUrlError={this.state.longDescriptionUrlError}
          longDescriptionUrlOnChange={this.longDescriptionUrlOnChange}
          longDescriptionUrlActive={this.state.longDescriptionUrlActive}
          longDescriptionUrlActiveOnChange={this.longDescriptionUrlActiveOnChange}
          dropdownOpen={this.state.dropdownOpen}
          toggleDropdown={this.toggleDropdown}
          codeOnChange={this.codeOnChange}
          allowedOrigins={this.state.allowedOrigins}
          handleAllowedOriginsAdd={this.handleAllowedOriginsAdd}
          handleAllowedOriginsDelete={this.handleAllowedOriginsDelete}
          allowedMethods={this.state.allowedMethods}
          handleAllowedMethodsAdd={this.handleAllowedMethodsAdd}
          handleAllowedMethodsDelete={this.handleAllowedMethodsDelete}
          allowedHeaders={this.state.allowedHeaders}
          handleAllowedHeadersAdd={this.handleAllowedHeadersAdd}
          handleAllowedHeadersDelete={this.handleAllowedHeadersDelete}
          exposedHeaders={this.state.exposedHeaders}
          handleExposedHeadersAdd={this.handleExposedHeadersAdd}
          handleExposedHeadersDelete={this.handleExposedHeadersDelete}
          allowCredentials={this.state.allowCredentials}
          optionsPassthrough={this.state.optionsPassthrough}
          maxAge={this.state.maxAge}
          allowCredentialsOnChange={this.allowCredentialsOnChange}
          optionsPassthroughOnChange={this.optionsPassthroughOnChange}
          maxAgeOnChange={this.maxAgeOnChange}
          cacheActive={this.state.cacheActive}
          cacheActiveOnChange={this.cacheActiveOnChange}
          ttl={this.state.ttl}
          ttlOnChange={this.ttlOnChange}
          secretPaths={this.state.secretPaths}
          handleSecretPathsAdd={this.handleSecretPathsAdd}
          handleSecretPathsDelete={this.handleSecretPathsDelete}/>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.saveService}>Save</Button>{' '}
        </ModalFooter>
      </FullModal>
    );
  }
}