import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardImg, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import * as ReactMarkdown from 'react-markdown';
import { IService } from '../../../models/interface';
let styles = require('./ServiceInfoCard.scss');

export interface IServiceInfoCardProps {
  service?:IService;
}

interface IServiceInfoCardState {
  longDescriptionOpen:boolean;
}

export default class ServiceInfoCard extends React.Component<IServiceInfoCardProps, IServiceInfoCardState>{
  state = {
    longDescriptionOpen: false
  }

  static defaultProps:IServiceInfoCardProps = {
    service:{
      name: 'Unknown',
      short_description: 'Unknown service',
      long_description: '',
      logo: ''
    }
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    let service = this.props.service;

    return (
      <Card className={styles.ServiceInfoCard} onClick={this.toggleDescription}>
        <Row>
          <Col md='2'>
            <CardBlock>
              {service.logo ? (<CardImg width="64" height="64" src={service.logo}/>) : (<i className="fa fa-server" style={{fontSize:'64px'}}/>) }
            </CardBlock>
          </Col>
          <Col md='10'>
            <CardBlock>
              <CardTitle>{service.name}</CardTitle>
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