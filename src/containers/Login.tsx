import * as React from 'react';
import { Button, Row, Col } from 'reactstrap';
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
  loading: boolean;
  availableRoles?:Array<string>
  currentRole?:string
  handleRoleUpdate?:{(role:string):void}
  handleTagNavigation?: any;
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

  getLoginForm = () => { 
    if(!this.props.loading){
      const loginError = this.props.loginError
      return (
        <LoginForm
          activeTab={this.state.loginFormActiveTab}
          toggleTab={this.toggleTabLoginForm}
          status={this.props.loginStatus}
          error={loginError} />
      );
    } 
    return null;
  }

  render(){
    const message = mockUser.isLogged ? 'You are logged in:' : 'You are trying to login to:';

    const errorPanel = this.getErrorsPanel();
    const loginForm = this.getLoginForm();

    return (
      <div className={styles.container} > 
        <div className={styles.firstRow}>
          <SpaceCard space={this.props.space} />
        </div>
        <Row>
          <Col className={styles.logoContainer} xs="12" lg="auto">
            <img src={ this.props.space.logo === "" ? logo : this.props.space.logo } className={styles.logo}/>
          </Col>
          <Col className={styles.rightSide} sm="12" lg="auto">
            <h3>{message}</h3>
            <ServiceInfoCard 
              service={this.props.service}
              userIsLogged={this.props.loginStatus.isLogged}
              availableRoles={this.props.availableRoles}
              currentRole={this.props.currentRole} 
              handleRoleUpdate={this.props.handleRoleUpdate} 
              handleTagNavigation={this.props.handleTagNavigation} />
            {errorPanel}
            {loginForm}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;