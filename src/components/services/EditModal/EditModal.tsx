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
}

const DEFAULT_LOGO = 'https://placehold.it/64x64',
      SHORT_DESCRIPTION_LENGTH = 100;

export default class EditModal extends React.Component<IEditModalProps, IEditModalState>{
  state = {
    activeTab: 'general',
    activeRole: 'All',
    backendRule: '',
    dropdownOpen: false,
    subdomain: '',
    subdomainError: false,
    name: 'Unknown service',
    nameError: false,
    logo: DEFAULT_LOGO,
    logoError: false,
    shortDescription: '',
    longDescriptionUrl: '',
    longDescriptionUrlActive: false,
    longDescription: ''
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

  formHasNoErrors = () => {
    let nameError = this.state.name.trim() === '',
        subdomainError = this.state.subdomain.trim() === '';
    return !nameError && !subdomainError ;
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
    if(this.formHasNoErrors()){
      // @TODO: Send data here
      console.log('There are no errors');
    }else{
      this.setState({
        nameError: this.state.name.trim() === '',
        subdomainError: this.state.subdomain.trim() === ''
      });
    }
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
          longDescriptionUrlOnChange={this.longDescriptionUrlOnChange}
          longDescriptionUrlActive={this.state.longDescriptionUrlActive}
          longDescriptionUrlActiveOnChange={this.longDescriptionUrlActiveOnChange}
          dropdownOpen={this.state.dropdownOpen}
          toggleDropdown={this.toggleDropdown}
          roles={this.props.roles}
          codeOnChange={this.codeOnChange}/>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.saveService}>Save</Button>{' '}
        </ModalFooter>
      </Modal>
    );
  }
}