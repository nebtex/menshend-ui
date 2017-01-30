import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardImg, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import * as ReactMarkdown from 'react-markdown';
import { IService } from '../../models/interface';
let styles = require('./ServiceCard.scss');

interface IServiceCardProps {
  service:IService;
}

interface IServiceCardState {
  longDescriptionOpen:boolean;
}

export default class ServiceCard extends React.Component<IServiceCardProps, IServiceCardState>{
  state = {
    longDescriptionOpen: false
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    let service = this.props.service;

    return (
      <Card className={styles.serviceCard} onClick={this.toggleDescription}>
        <Row>
          <Col md='2'>
            <CardBlock>
              <CardImg width="64" height="64" src={service.logo}/>
            </CardBlock>
          </Col>
          <Col md='10'>
            <CardBlock>
              <CardTitle> {service.name} </CardTitle>
              <CardText>
                {service.short_description}
              </CardText>
            </CardBlock> 
          </Col>
        </Row>
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