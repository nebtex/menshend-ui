import * as classnames from 'classnames';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Container, Row, Col, Card, CardBlock, CardImg, CardTitle, CardText, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IUser } from '../../../models/interface';
import { ClientService } from '../../../api/api';
let styles = require('./ServiceCard.scss');

export interface IServiceCardProps {
  // service: ClientService;
  service?: ClientService;
  loginStatus?: any;
  openEditModal?: any;
}

interface IServiceCardState {
  longDescriptionOpen:boolean;
}

export default class ServiceInfoCard extends React.Component<IServiceCardProps, IServiceCardState>{
  state = {
    longDescriptionOpen: false
  }

  getTagsRenderer = () => {
    let meta = this.props.service && this.props.service.meta ? this.props.service.meta : {};
    if(meta && meta.tags && meta.tags.length > 0){
      return (
        <div className={styles.tagsRenderer}>
          {meta.tags.map((tag, index) => {
            return <Badge key={index}>{tag}</Badge>
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

  render(){
    const { service, loginStatus } = this.props;
    const { meta } = service;
        
    const editButton = loginStatus.isAdmin ? (<Button onClick={this.editService} className={styles.button} color="primary" outline>Edit</Button>) : null,
        deleteButton = loginStatus.isAdmin ? (<Button onClick={this.deleteService} className={styles.button} color="danger" outline>Delete</Button>) : null,
        tagsRenderer = this.getTagsRenderer();
    
    let longDescription:string;
    if(meta.longDescription && meta.longDescription.local && meta.longDescription.local.content) {
      longDescription = meta.longDescription.local.content;
    } else if(meta.longDescription && meta.longDescription.remote && meta.longDescription.remote.content) {
      longDescription = meta.longDescription.remote.content;
    } else {
      longDescription = ''
    }

    return (
      <Card onClick={this.toggleDescription} className={styles.card}>
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
                <CardTitle>{service.meta.name}</CardTitle>
                <CardText>
                  {service.meta.description}
                </CardText>
              </CardBlock> 
            </Col>
          </Row>
          <Row className={styles.buttonsRow}>
            {deleteButton}
            {editButton}
            <Button className={styles.button} onClick={this.goToService} color="success" outline>Go</Button>
          </Row>
        </div>
        <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} className={styles.modal}>
          <ModalHeader toggle={this.toggleDescription}> {service.meta.name} </ModalHeader>
          <ModalBody>
            <ReactMarkdown source={ longDescription }/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}