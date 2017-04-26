import * as classnames from 'classnames';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Container, Row, Col, Card, CardBlock, CardImg, CardTitle, CardText, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup } from 'reactstrap';
import { IUser } from '../../../models/interface';
import { ClientService, LoginStatus } from '../../../api/api';
import SecretElement from '../../login/ServiceInfoCard/SecretElement';
let styles = require('./ServiceCard.scss');

export interface IServiceCardProps {
  // service: ClientService;
  service?: ClientService;
  loginStatus?: LoginStatus;
  openEditModal?: any;
  handleTagNavigation?: {(tag:string):void};
}

interface IServiceCardState {
  longDescriptionOpen:boolean;
  secretsModalOpen:boolean;
}

export default class ServiceInfoCard extends React.Component<IServiceCardProps, IServiceCardState>{
  state = {
    longDescriptionOpen: false,
    secretsModalOpen: false
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

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  editService = (e:any) => {
    this.props.openEditModal(this.props.service);
    e.stopPropagation();    
  }

  deleteService = (e:any) => {
    e.stopPropagation();
  }

  goToService = (e:any) => {
    e.stopPropagation();
  }

  toggleSecretsModal = (e:any) => {
    this.setState({
      secretsModalOpen: !this.state.secretsModalOpen
    });
  }

  getSecretButton = () => {
    const { service } = this.props;
    const userIsLogged = this.props.loginStatus.isLogged;

    if(service && service.secretPaths && service.secretPaths.length > 0 && userIsLogged){
      return <Button size="sm" outline color="secondary" onClick={this.toggleSecretsModal}>Secrets</Button>;
    }
    return null;
  }

  getGoButton = () => {
    if(this.props.service && this.props.service.fullUrl) {
      return (
        <a href={this.props.service.fullUrl} target="_blank">
          <Button color="primary" outline size="sm">Go</Button>
        </a>
      );
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

  getDeleteButton = () => {
    const { loginStatus } = this.props;
    if(loginStatus.isAdmin){
      return <Button onClick={this.deleteService} size="sm" color="danger" outline>Delete</Button>;
    }
    return null;
  }

  getEditButton = () => {
    const { loginStatus } = this.props;
    if(loginStatus.isAdmin){
      return <Button onClick={this.editService} size="sm" color="primary" outline>Edit</Button>;
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

  render(){
    const { service } = this.props;
    const editButton = this.getEditButton(),
        deleteButton = this.getDeleteButton(),
        tagsRenderer = this.getTagsRenderer(),
        secretsButton = this.getSecretButton(),
        viewMore = this.getViewLongDescriptionButton(),
        goButton = this.getGoButton(), 
        secretModal = this.getSecretModal(),
        descriptionModal = this.getDescriptionModal();

    return (
      <Card className={styles.card}>
        <div className={styles.cardContainer}>
          <Row className={styles.rowHeader}>
            <Col xs="4">
              <CardBlock>
                {service.meta.logo ? (<CardImg width="64" height="64" src={service.meta.logo}/>) : (<i className="fa fa-server" style={{fontSize:'64px'}}/>) }
                <CardText>{tagsRenderer}</CardText>
              </CardBlock>
            </Col>
            <Col>
              <CardBlock className={styles.secondBlock}>
                <div className={styles.titleRow}>
                  <CardTitle className={styles.title}>
                    {service.meta.name}
                  </CardTitle>
                  <Badge color="primary" pill className={styles.roleBadge}>{service.meta.roleId}</Badge>
                </div>
                <CardText>
                  {service.meta.description}
                </CardText>
              </CardBlock> 
            </Col>
          </Row>
          <CardText className={styles.buttonsContainer}>
            {/*<div className={styles.adminButtons}>
              {deleteButton}{' '}
              {editButton}{' '}
            </div>*/}
            <div className={styles.standarButtons}>
              {secretsButton}{' '}
              {viewMore}{' '}
              {goButton}
            </div>
          </CardText>
        </div>
        { secretModal }
        { descriptionModal }
      </Card>
    );
  }
}