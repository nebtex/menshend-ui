import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LoginForm from '../components/login/LoginForm/LoginForm.tsx';
import ServiceCard from '../components/login/ServiceCard';
import EnvironmentCard from '../components/login/EnvironmentCard';
import ErrorsPanel from '../components/login/ErrorsPanel';
import { IUser } from '../models/interface.tsx';
import LoginCounter from '../components/login/ServiceCounter';
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

export default class Login extends React.Component<IUser, {}>{
  githubLogin = () => {
    console.log('Getting logged in github');
  };

  tokenLogin = (token:string) => {
    console.log('Login with this token: ', token);
  };

  userPassLogin = (user:string, pass:string) => {
    console.log('Login with these credentials: ', user, pass);
  };

  getActiveComponents = () => {
    if (this.props.isLogged){
      return (
        <Col>
          <LoginCounter />
          <Button color="danger">Logout</Button>
        </Col>
      );
    } else {
      return (
        <Row>
          <Col className={styles.rightSide}>
            <h3>You are trying to login to:</h3>
            <ServiceCard
              name={mockService.name}
              short_description={mockService.short_description}
              long_description={mockService.long_description}
              logo={mockService.logo}/>
            <ErrorsPanel/>
            <LoginForm
              githubLogin={this.githubLogin}
              tokenLogin={this.tokenLogin}
              userPassLogin={this.userPassLogin}
            />
          </Col>
        </Row>
      );
    }
  };

  render(){
    let activeComponents = this.getActiveComponents();

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
            <Col md="12" lg="6" className={styles.environmentLogo}>
              <img src={mockEnvironment.logo} />
            </Col>
            { activeComponents }
          </Row>
        </Container>
      </div>
    );
  }
}