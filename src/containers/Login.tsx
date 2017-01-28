import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from '../components/login/LoginForm/LoginForm.tsx';
import ServiceCard from '../components/login/ServiceCard';
import EnvironmentCard from '../components/login/EnvironmentCard';
import ErrorsPanel from '../components/login/ErrorsPanel';
let styles = require('./Login.scss');

const mockService = {
  name: "Github",
  short_description: "This is the short description", 
  long_description: "This is the long description",
  logo: "https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png"
}

const mockEnvironment = {
  name: "Kooper",
  short_description: "This is the short description", 
  long_description: "This is the long description",
  logo: "https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png"
}

export default class Login extends React.Component<{}, {}>{
  render(){
    return (
      <div className={styles.container} > 
        <Container>
          <Row>
            <EnvironmentCard 
              name={mockEnvironment.name}
              short_description={mockEnvironment.short_description}
              long_description={mockEnvironment.long_description}/>
          </Row>
          <Row>
            <Col md="6">
              <img src={mockEnvironment.logo} />
            </Col>
            <Col md="6">
              <h3>You are trying to login to:</h3>
              <ServiceCard
                name={mockService.name}
                short_description={mockService.short_description}
                long_description={mockService.long_description}
                logo={mockService.logo}/>
              <ErrorsPanel/>
              <LoginForm/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}