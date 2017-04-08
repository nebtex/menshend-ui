import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LoginForm, { ActiveTabType } from '../components/login/LoginForm/LoginForm';
import ServiceInfoCard from '../components/login/ServiceInfoCard/ServiceInfoCard';
import SpaceCard from '../components/login/SpaceCard/SpaceCard';
import ErrorsPanel from '../components/login/ErrorsPanel/ErrorsPanel';
import { Space , LoginStatus, ClientService } from '../api/api';
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
  loginStatus: LoginStatus;
  service: ClientService;
}

 @observer class Login extends React.Component<ILoginProps, ILoginState>{
  errorTab = false;

  constructor(props:any){
    super(props);
    this.state = {
      loginFormActiveTab: 'UserPassTab'
    }
  }

  toggleTabLoginForm = (tab:ActiveTabType) => {
    this.setState({
      loginFormActiveTab: tab
    });
  }

  componentWillReceiveProps(nextProps:ILoginProps) {
    const { loginError } = nextProps;
    let activeTab: ActiveTabType;
    if(loginError){
      switch(loginError){
        case 'Token':
          activeTab = 'TokenTab'
        break;
        default:
          activeTab = 'UserPassTab'
        break;
      }
      this.setState({
        loginFormActiveTab: activeTab
      })
    }
  }

  getErrorsPanel = () => {
    if(this.props.flashes && this.props.flashes.length > 0){
      return <ErrorsPanel flashes={this.props.flashes}/>;
    }
    return null;
  }

  render(){
    const message = mockUser.isLogged ? 'You are logged in:' : 'You are trying to login to:';
    const loginError = this.props.loginError

    const errorPanel = this.getErrorsPanel();

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
              <ServiceInfoCard service={this.props.service} userIsLogged={this.props.loginStatus.isLogged}/>
              {errorPanel}
              <LoginForm
                activeTab={this.state.loginFormActiveTab}
                toggleTab={this.toggleTabLoginForm}
                status={this.props.loginStatus}
                error={loginError} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;