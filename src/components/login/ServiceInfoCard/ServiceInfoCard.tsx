import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardImg, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button, ListGroup } from 'reactstrap';
import * as ReactMarkdown from 'react-markdown';
import { ClientService } from '../../../api/api';
import SecretElement from './SecretElement';
let styles = require('./ServiceInfoCard.scss');

export interface IServiceInfoCardProps {
  service?:ClientService;
  userIsLogged?:boolean;
}

interface IServiceInfoCardState {
  longDescriptionOpen:boolean;
  secretsModalOpen:boolean;
}

export default class ServiceInfoCard extends React.Component<IServiceInfoCardProps, IServiceInfoCardState>{
  state = {
    longDescriptionOpen: false,
    secretsModalOpen: false
  }

  static defaultProps:IServiceInfoCardProps = {
    //@TODO remove service default prop, it is only for test
    service:{
      meta: {
        name: 'Unknown',
        description: 'Unknown service',
        longDescription: {},
        logo: ''
      },
      secretPaths: ['secret1', 'secret2']
    },
    userIsLogged: false
  }

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
      return (
        <CardText>
          <Button onClick={this.toggleSecretsModal}>Secrets</Button>
        </CardText>
      );
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
    const secretsButton = this.getSecretButton();
    const secretModal = this.getSecretModal();
    const descriptionModal = this.getDescriptionModal();

    let meta = this.props.service && this.props.service.meta ? this.props.service.meta : {};

    return (
      <Card className={styles.ServiceInfoCard} onClick={this.toggleDescription}>
        <Row>
          <Col md='2'>
            <CardBlock>
              {meta.logo ? (<CardImg width="64" height="64" src={meta.logo}/>) : (<i className="fa fa-server" style={{fontSize:'64px'}}/>) }
            </CardBlock>
          </Col>
          <Col md='10'>
            <CardBlock>
              <CardTitle>{meta.name}</CardTitle>
              <CardText>
                {meta.description || 'Unknown service'}
              </CardText>
              {secretsButton}
            </CardBlock> 
          </Col>
        </Row>
        { secretModal }
        { descriptionModal }
      </Card>
    );
  }
}