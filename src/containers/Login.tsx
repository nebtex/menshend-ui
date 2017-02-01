import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LoginForm, { ActiveTabType } from '../components/login/LoginForm/LoginForm';
import ServiceCard from '../components/login/ServiceCard';
import EnvironmentCard from '../components/login/EnvironmentCard';
import ErrorsPanel from '../components/login/ErrorsPanel';
import { IUser } from '../models/interface';
let styles = require('./Login.scss');

let mockUser = {
  user: 'myuser',
  pass: 'mypass',
  isLogged: false,
  expiresAt: 1485770407948
}

interface ILoginState {
  loginFormActiveTab: ActiveTabType;
}

export default class Login extends React.Component<{}, ILoginState>{
  constructor(props:any){
    super(props);
    this.state = {
      loginFormActiveTab: 'UserPassTab'
    }
  }

  githubLogin = () => {
    console.log('Getting logged in github');
  };

  tokenLogin = (token:string) => {
    console.log('Login with this token: ', token);
  };

  userPassLogin = (user:string, pass:string) => {
    console.log('Login with these credentials: ', user, pass);
  };

  toggleTabLoginForm = (tab:ActiveTabType) => {
    this.setState({
      loginFormActiveTab: tab
    });
  };

  render(){
    let message = mockUser.isLogged ? 'You are logged in:' : 'You are trying to login to:';

    return (
      <div className={styles.container} > 
        <Container>
          <Row>
            <Col md="12" lg="6" className={styles.environmentLogo}>
              <EnvironmentCard />
            </Col>
            <Col className={styles.rightSide}>
              <h3>{message}</h3>
              <ServiceCard />
              <ErrorsPanel />
              <LoginForm
                githubLogin={this.githubLogin}
                tokenLogin={this.tokenLogin}
                userPassLogin={this.userPassLogin}
                activeTab={this.state.loginFormActiveTab}
                toggleTab={this.toggleTabLoginForm}
                user={mockUser}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}