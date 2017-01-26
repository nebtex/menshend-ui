import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardImg, CardText, CardTitle } from 'reactstrap';

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
  render(){
    return (
      <Container>
        <Row>
          <h3>You are trying to login to:</h3>
        </Row>
        <Row>
          <Card style={{width:'100%'}}>
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
          </Card>
        </Row>
      </Container>
    );
  }
}