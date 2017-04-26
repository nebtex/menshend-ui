import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardImg, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button, ListGroup, Badge, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import * as ReactMarkdown from 'react-markdown';
import { ClientService } from '../../../api/api';
import SecretElement from './SecretElement';
import router from '../../../stores/router';
import { views } from '../../../routes';
let styles = require('./ServiceInfoCard.scss');

export interface IServiceInfoCardProps {
  service?:ClientService;
  userIsLogged?:boolean;
  availableRoles?:Array<string>
  currentRole?:string
  handleRoleUpdate?:{(role:string):void}
  handleTagNavigation?: any;
}

interface IServiceInfoCardState {
  longDescriptionOpen:boolean;
  secretsModalOpen:boolean;
  rolesDropdownOpen:boolean;
}

export default class ServiceInfoCard extends React.Component<IServiceInfoCardProps, IServiceInfoCardState>{
  state = {
    longDescriptionOpen: false,
    secretsModalOpen: false,
    rolesDropdownOpen: false
  }

  static defaultProps:IServiceInfoCardProps = {}

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  toggleSecretsModal = (e:any) => {
    e.stopPropagation();
    this.setState({
      secretsModalOpen: !this.state.secretsModalOpen
    });
  }

  getSecretButton = () => {
    const { service, userIsLogged } = this.props;

    if(service && service.secretPaths && service.secretPaths.length > 0 && userIsLogged){
      return <Button size="sm" outline color="secondary" onClick={this.toggleSecretsModal}>Secrets</Button>;
    }
    return null;
  }

  getSecretModal = () => {
    const { service } = this.props;

    if(service && service.secretPaths){
      return (
        <Modal isOpen={this.state.secretsModalOpen} toggle={this.toggleSecretsModal} className={styles.secretsModal}>
          <ModalHeader toggle={this.toggleSecretsModal}> Secrets </ModalHeader>
          <ModalBody>
            <ListGroup>
              {service.secretPaths.map((secret, index) => {
                return <SecretElement key={index} secret={secret} serviceId={service.meta.id}/>
              })}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleSecretsModal}>OK</Button>
          </ModalFooter>
        </Modal>
      )
    }
    return null;
  }

  getViewLongDescriptionButton = () => {
    const meta = this.props.service && this.props.service.meta ? this.props.service.meta : {};    
    const hasLocalDescription = meta.longDescription && meta.longDescription.local && meta.longDescription.local.content;
    const hasRemotDescription = meta.longDescription && meta.longDescription.remote && meta.longDescription.remote.content;

    if(hasRemotDescription || hasLocalDescription){
      return <Button outline color="info" size="sm" onClick={this.toggleDescription}>View more</Button>
    }
    return null;
  }

  getDescriptionModal = () => {
    let meta = this.props.service && this.props.service.meta ? this.props.service.meta : {};
    
    let longDescription:string;
    if(meta.longDescription && meta.longDescription.local && meta.longDescription.local.content) {
      longDescription = meta.longDescription.local.content;
    } else if(meta.longDescription && meta.longDescription.remote && meta.longDescription.remote.content) {
      longDescription = meta.longDescription.remote.content;
    } else {
      longDescription = ''
    }

    return (
      <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} className={styles.serviceInfoModal}>
        <ModalHeader toggle={this.toggleDescription}> {meta.name || 'Unknown'} </ModalHeader>
        <ModalBody>
          <ReactMarkdown source={longDescription}/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
        </ModalFooter>
      </Modal>
    );
  }

  getTagsRenderer = () => {
    let meta = this.props.service && this.props.service.meta ? this.props.service.meta : {};
    if(meta && meta.tags && meta.tags.length > 0){
      return (
        <div className={styles.tagsRenderer}>
          {meta.tags.map((tag, index) => {
            return <Badge key={index} onClick={() => {this.props.handleTagNavigation(tag)}}>{tag}</Badge>
          })}
        </div>
      )
    }
    return null;
  }

  getGoButton = () => {
    if(this.props.service && this.props.service.fullUrl) {
      return (
        <a target="_blank" href={this.props.service.fullUrl}>
          <Button color="primary" outline size="sm">Go</Button>
        </a>
      );
    }
    return null;
  }

  toggleRolesDropdown = () => {
    this.setState({
      rolesDropdownOpen: !this.state.rolesDropdownOpen
    });
  }

  getRolesDropdown = () => {
    const { currentRole, availableRoles } = this.props;
    if(currentRole && availableRoles && availableRoles.length > 0){
      return (
        <Dropdown isOpen={this.state.rolesDropdownOpen} toggle={this.toggleRolesDropdown}>
          <DropdownToggle caret>
            {currentRole}
          </DropdownToggle>
          <DropdownMenu>
            {availableRoles.map((role, index) => {
              return <DropdownItem key={index} onClick={()=>{this.props.handleRoleUpdate(role)}}>{role}</DropdownItem>              
            })}
          </DropdownMenu>
        </Dropdown>
      );
    }
    return null;
  }

  render(){
    const rolesDropdown = this.getRolesDropdown();
    const secretsButton = this.getSecretButton();
    const viewMore = this.getViewLongDescriptionButton();
    const goButton = this.getGoButton();
    const secretModal = this.getSecretModal();
    const descriptionModal = this.getDescriptionModal();

    const meta = this.props.service && this.props.service.meta ? this.props.service.meta : {};
    const tagsRenderer = this.getTagsRenderer();

    return (
      <Card className={styles.ServiceInfoCard}>
        <div className={styles.wrapper}>
          <div className={styles.logoContainer}>
            <CardBlock>
              {meta.logo ? (<CardImg width="64" height="64" src={meta.logo}/>) : (<i className="fa fa-server" style={{fontSize:'64px'}}/>) }
            </CardBlock>
          </div>
          <div className={styles.infoContainer}>
            <CardBlock>
              <div className={styles.titleRow}>
                <CardTitle className={styles.title}>{meta.name}</CardTitle>
                {rolesDropdown}
              </div>
              <CardText>
                {meta.description || 'Unknown service'}
                {tagsRenderer}
              </CardText>
              <CardText className={styles.buttonsContainer}>
                {secretsButton}{' '}
                {viewMore}{' '}
                {goButton}
              </CardText>
            </CardBlock>
          </div>
        </div>
        { secretModal }
        { descriptionModal }
      </Card>
    );
  }
}