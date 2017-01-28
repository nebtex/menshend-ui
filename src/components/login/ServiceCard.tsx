import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardImg, CardText, CardTitle, Popover, PopoverContent } from 'reactstrap';
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
      <Card className={styles.serviceCard} onClick={this.toggleDescription} id="serviceLongDescription">
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
        <Popover placement="bottom" isOpen={this.state.longDescriptionOpen} target="serviceLongDescription" toggle={this.toggleDescription}>
          <PopoverContent>{ this.props.long_description }</PopoverContent>
        </Popover>
      </Card>
    );
  }
}