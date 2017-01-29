import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardImg, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import * as ReactMarkdown from 'react-markdown';
let styles = require('./ServiceCard.scss');

type BackendErrorType = "PermissionError" | "NotResponseError" | void;

export interface IService {
    name: string// name of the service
    short_description: string // short description of the service
    long_description?: string // service long description
    logo: string // service logo
    subDomain?: string
    rule?: string
    error?: BackendErrorType
}

export default class ServiceCard extends React.Component<IService, {}>{
  state = {
    longDescriptionOpen: false
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    return (
      <Card className={styles.serviceCard} onClick={this.toggleDescription}>
        <Row>
          <Col md='2'>
            <CardBlock>
              <CardImg width="64" height="64" src={this.props.logo}/>
            </CardBlock>
          </Col>
          <Col md='10'>
            <CardBlock>
              <CardTitle> {this.props.name} </CardTitle>
              <CardText>
                {this.props.short_description}
              </CardText>
            </CardBlock> 
          </Col>
        </Row>
        <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} >
          <ModalHeader toggle={this.toggleDescription}> {this.props.name} </ModalHeader>
          <ModalBody>
            <ReactMarkdown source={ this.props.long_description }/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}