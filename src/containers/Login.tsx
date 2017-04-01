import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LoginForm, { ActiveTabType } from '../components/login/LoginForm/LoginForm';
import ServiceInfoCard from '../components/login/ServiceInfoCard/ServiceInfoCard';
import SpaceCard from '../components/login/SpaceCard/SpaceCard';
import ErrorsPanel from '../components/login/ErrorsPanel/ErrorsPanel';
import { IUser } from '../models/interface';
import { Space } from '../api/api';
import { observer } from 'mobx-react';
let logo = require('../assets/octopus-logo.svg');
let styles = require('./Login.scss');

let mockUser = {
  user: 'myuser',
  pass: 'mypass',
  isLogged: false,
  expiresAt: Date.now() + 3600000
}

interface ILoginState {
  loginFormActiveTab: ActiveTabType;
}

interface ILoginProps {
  flashes: string[]
  space: Space;
  loginError: string;
}

 @observer class Login extends React.Component<ILoginProps, ILoginState>{
  constructor(props:any){
    super(props);
    this.state = {
      loginFormActiveTab: 'UserPassTab'
    }
  }

  githubLogin = () => {
    console.log('Getting logged in github');
  }

  tokenLogin = (token:string) => {
    console.log('Login with this token: ', token);
  }

  userPassLogin = (user:string, pass:string) => {
    console.log('Login with these credentials: ', user, pass);
  }

  toggleTabLoginForm = (tab:ActiveTabType) => {
    this.setState({
      loginFormActiveTab: tab
    });
  }

  render(){
    let message = mockUser.isLogged ? 'You are logged in:' : 'You are trying to login to:';
    console.log('error:', this.props.loginError);

    return (
      <div className={styles.container} > 
        <Container>
          <Row>
            <SpaceCard space={this.props.space} />
          </Row>
          <Row>
            <Col md="12" lg="6" className={styles.logoContainer}>
              <img src={ this.props.space.logo === "" ? logo : this.props.space.logo } className={styles.logo}/>
            </Col>
            <Col className={styles.rightSide}>
              <h3>{message}</h3>
              <ServiceInfoCard />
              <ErrorsPanel flashes={this.props.flashes}/>
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

export default Login;