import * as classnames from 'classnames';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Container, Row, Col, Card, CardBlock, CardImg, CardTitle, CardText, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IService, IUser } from '../../../models/interface';
let styles = require('./ServiceCard.scss');

export interface IServiceCardProps {
  service: IService;
  user: IUser;
}

interface IServiceCardState {
  longDescriptionOpen:boolean;
}

export default class ServiceInfoCard extends React.Component<IServiceCardProps, IServiceCardState>{
  state = {
    longDescriptionOpen: false
  }

  getRolesBadges = () => {
    return (
      <div className={styles.rolesContainer}>
        {this.props.service.roles.map((role, index) => {
          return <Badge className={styles.roleBadge} key={index}>{role}</Badge>
        })}      
      </div>
    );
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  editService = (e:any) => {
    e.stopPropagation();
  }

  deleteService = (e:any) => {
    e.stopPropagation();
  }

  goToService = (e:any) => {
    e.stopPropagation();
  }

  render(){
    let service = this.props.service,
        user = this.props.user;
        
    let editButton = user.isAdmin ? (<Button onClick={this.editService} className={styles.button} color="primary" outline>Edit</Button>) : null,
        deleteButton = user.isAdmin ? (<Button onClick={this.deleteService} className={styles.button} color="danger" outline>Delete</Button>) : null,
        rolesBadges = this.getRolesBadges();

    return (
      <Card onClick={this.toggleDescription} className={styles.card}>
        <div className={styles.cardContainer}>
          <Row className={styles.rowHeader}>
            <Col xs="4">
              <CardBlock>
                {service.logo ? (<CardImg width="64" height="64" src={service.logo}/>) : (<i className="fa fa-server" style={{fontSize:'64px'}}/>) }
              </CardBlock>
              <Row className={styles.rolesBadgesRow}>
                {rolesBadges}
              </Row>
            </Col>
            <Col>
              <CardBlock className={styles.secondBlock}>
                <CardTitle>{service.name}</CardTitle>
                <CardText>
                  {service.short_description}
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
        <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} >
          <ModalHeader toggle={this.toggleDescription}> {service.name} </ModalHeader>
          <ModalBody>
            <ReactMarkdown source={ service.long_description }/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}