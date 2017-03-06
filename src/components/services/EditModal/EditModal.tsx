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

interface IEditModalState {
  dropdownOpen: boolean;
  activeTab: string;
  backendRule: string;
  name: string;
  nameError: boolean;
  logo: string;
  logoError: boolean;
  shortDescription: string;
  longDescriptionUrl: string;
  longDescriptionUrlActive: boolean;
  longDescription: string;
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
      longDescriptionUrlError: false
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
          codeOnChange={this.codeOnChange}/>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.saveService}>Save</Button>{' '}
        </ModalFooter>
      </FullModal>
    );
  }
}