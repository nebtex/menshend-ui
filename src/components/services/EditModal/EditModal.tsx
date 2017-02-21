import * as React from 'react';
import * as classnames from 'classnames';
import { IService } from '../../../models/interface';
import MonacoEditor from 'react-monaco-editor';
import EditModalBody from './EditModalBody/EditModalBody';
import EditModalHeader from './EditModalHeader/EditModalHeader';
let styles = require('./EditModal.scss');
import { Modal, ModalFooter, Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap';


export interface IEditModalProps {
  isOpen: boolean;
  toggle: any;
  roles: string[];
  service?: IService;
}

interface IEditModalState {
  dropdownOpen: boolean;
  activeTab: string;
  activeRole: string;
  backendRule: string;
  subdomain: string;
  subdomainError: boolean;
  name: string;
  nameError: boolean;
  logo: string;
  logoError: boolean;
  shortDescription: string;
  longDescriptionUrl: string;
  longDescriptionUrlActive: boolean;
  longDescription: string;
  serviceRoles: string[];
  availableRoles: string[];
  longDescriptionUrlError: boolean;
}

const DEFAULT_LOGO = 'https://placehold.it/64x64',
      SHORT_DESCRIPTION_LENGTH = 100;

const urlRegExp = new RegExp('https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}');

export default class EditModal extends React.Component<IEditModalProps, IEditModalState>{
  
  constructor(props:IEditModalProps){
    super(props);
    this.state = {
      activeTab: 'general',
      activeRole: 'All',
      backendRule: '',
      dropdownOpen: false,
      subdomain: this.props.service ? this.props.service.subDomain : '',
      subdomainError: false,
      name: this.props.service ? this.props.service.name : 'Unknown service',
      nameError: false,
      logo: this.props.service ? this.props.service.logo : DEFAULT_LOGO,
      logoError: false,
      shortDescription: this.props.service ? this.props.service.short_description : '',
      longDescriptionUrl: '',
      longDescriptionUrlActive: false,
      longDescription: this.props.service ? this.props.service.long_description : '',
      serviceRoles: this.props.service ? this.props.service.roles.slice() : [''],
      longDescriptionUrlError: false,
      availableRoles: this.getAvailableRoles() 
    }
  }

  getAvailableRoles = () => {
    let availableRoles:string[] = this.props.roles.slice(), // get an array copy
        service  = this.props.service;

    if(service && service.roles){
      service.roles.forEach((role:string) => {
        const index = availableRoles.indexOf(role);
        if(index > -1){
          availableRoles.splice(index, 1);
        }
      });
    }

    return availableRoles;
  }

  toggleTab = (tab:string) => {
    this.setState({
      activeTab: tab
    });
  }

  selectRole = (role:string) => {
    this.setState({
      activeRole: role
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

  subdomainOnChange = (e:any) => {
    // Only alphanumeric
    let value = e.target.value,
        regex = /^[a-z0-9]+$/i;

    if(regex.test(value) || value === ''){
      this.setState({
        subdomain: value
      });
    }
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
          subdomainError = this.state.subdomain.trim() === '',
          longDescriptionUrlError = !urlRegExp.test(this.state.longDescriptionUrl) || 
                                    (this.state.longDescriptionUrl === '' && this.state.longDescriptionUrlActive);

    if(!nameError && !subdomainError && !longDescriptionUrlError){
      // @TODO: Send data here
      console.log('There are no errors');
    }else{
      const activeTab = (nameError || subdomainError) ? 'general' : ( longDescriptionUrlError ? 'longDescription': this.state.activeTab);
      this.setState({
        nameError,
        subdomainError,
        longDescriptionUrlError,
        activeTab
      });
    }
  }

  serviceRoleOnAddition = (role:string) => {
    let serviceRoles = this.state.serviceRoles;
    
    // push and sort in the serviceRoles
    serviceRoles.push(role);
    serviceRoles.sort();

    this.setState({
      serviceRoles: serviceRoles
    });
  }

  serviceRolesOnDoubleClick = (role:string) => {
    const serviceRolesIndex = this.state.serviceRoles.indexOf(role),
          roleAlreadyExists = this.props.roles.indexOf(role) > -1;          

    let availableRoles = this.state.availableRoles,
        serviceRoles = this.state.serviceRoles;

    // Remove from available roles
    serviceRoles.splice(serviceRolesIndex, 1);

    // chek if service exists in roles prop
    if (roleAlreadyExists){
      // Push to service roles and sort
      availableRoles.push(role);
      availableRoles.sort();
    }

    this.setState({
      availableRoles: availableRoles,
      serviceRoles:serviceRoles
    });
  }

  availableRolesOnDoubleClick = (role:string) => {
    const availableRolesIndex = this.state.availableRoles.indexOf(role);          

    let availableRoles = this.state.availableRoles,
        serviceRoles = this.state.serviceRoles;

    // Remove from available roles
    availableRoles.splice(availableRolesIndex, 1);

    // Push to service roles and sort
    serviceRoles.push(role);
    serviceRoles.sort();

    this.setState({
      availableRoles: availableRoles,
      serviceRoles:serviceRoles
    });
  }

  render(){
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={styles.modal}>
        <EditModalHeader 
          service={this.props.service ? true : false}
          toggle={this.props.toggle}
        />
        <EditModalBody 
          activeTab={this.state.activeTab}
          toggleTab={this.toggleTab}
          activeRole={this.state.activeRole}
          selectRole={this.selectRole}
          subdomain={this.state.subdomain}
          subdomainOnChange={this.subdomainOnChange}
          subdomainError={this.state.subdomainError}
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
          availableRoles={this.state.availableRoles}
          serviceRoles={this.state.serviceRoles}
          serviceRolesOnDoubleClick={this.serviceRolesOnDoubleClick}
          availableRolesOnDoubleClick={this.availableRolesOnDoubleClick}
          serviceRoleOnAddition={this.serviceRoleOnAddition}
          codeOnChange={this.codeOnChange}/>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.saveService}>Save</Button>{' '}
        </ModalFooter>
      </Modal>
    );
  }
}