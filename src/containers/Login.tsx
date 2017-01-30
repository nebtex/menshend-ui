import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LoginForm from '../components/login/LoginForm/LoginForm.tsx';
import ServiceCard from '../components/login/ServiceCard';
import EnvironmentCard from '../components/login/EnvironmentCard';
import ErrorsPanel from '../components/login/ErrorsPanel';
import { IUser } from '../models/interface.tsx';
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
  long_description: "This is the <br/> long description",
  logo: "https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png"
}

let mockUser = {
  user: 'myuser',
  pass: 'mypass',
  isLogged: true,
  expiresAt: 1485770407948
}

export default class Login extends React.Component<{}, {}>{
  githubLogin = () => {
    console.log('Getting logged in github');
  };

  tokenLogin = (token:string) => {
    console.log('Login with this token: ', token);
  };

  userPassLogin = (user:string, pass:string) => {
    console.log('Login with these credentials: ', user, pass);
  };

  render(){
    return (
      <div className={styles.container} > 
        <Container>
          <Row>
            <EnvironmentCard environment={mockEnvironment}/>
          </Row>
          <Row>
            <Col md="12" lg="6" className={styles.environmentLogo}>
              <img src={mockEnvironment.logo} />
            </Col>
            <Col className={styles.rightSide}>
              <h3>You are trying to login to:</h3>
              <ServiceCard service={mockService}/>
              <ErrorsPanel/>
              <LoginForm
                githubLogin={this.githubLogin}
                tokenLogin={this.tokenLogin}
                userPassLogin={this.userPassLogin}
                user={mockUser}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}