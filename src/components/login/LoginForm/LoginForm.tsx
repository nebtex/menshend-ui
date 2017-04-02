import * as React from 'react';
import { Form, FormGroup, Label, Input, Card, CardBlock, TabContent, TabPane, Nav, NavItem, NavLink, Col, Row, Button } from 'reactstrap';
import * as classnames from 'classnames';
import UserPassForm from './UserPassForm';
import TokenForm from './TokenForm';
import GithubLogin from './GithubLogin';
import { IUser } from '../../../models/interface';
import SessionCounter from '../SessionCounter/SessionCounter';
let styles = require('./LoginForm.scss');

export type ActiveTabType = 'UserPassTab' | 'TokenTab';

export interface ILoginFormProps {
  githubLogin() : void;
  tokenLogin(token:string) : void;
  userPassLogin(user:string, pass:string) : void;
  user: IUser;
  activeTab: ActiveTabType;
  toggleTab(tab?:ActiveTabType) : void;
  error?: string;
}

export default class LoginForm extends React.Component<ILoginFormProps, {}> {
  getActiveComponent = () => {
    let user = this.props.user;

    if (user.isLogged){
      return (
        <div className={styles.container}>
          <SessionCounter expiresAt={user.expiresAt}/>
          <Button color="danger" className={styles.logout} >Logout</Button>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.props.activeTab === 'UserPassTab' })}
                onClick={() => { this.props.toggleTab('UserPassTab'); }} >
                User/password
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.props.activeTab === 'TokenTab' })}
                onClick={() => { this.props.toggleTab('TokenTab'); }} >
                Token
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.props.activeTab}>
            <TabPane tabId="UserPassTab">
              <Card>
                <CardBlock>
                  <Row>
                    <Col md="5" style={{borderRight: "1px solid rgba(0,0,0,.125)"}}>
                      <GithubLogin handleLogin={this.props.githubLogin} error={this.props.user.loginError === 'Github'}/>
                    </Col>
                    <Col md="7">
                      <UserPassForm handleLogin={this.props.userPassLogin} error={this.props.user.loginError === 'Username/Password'}/>
                    </Col>
                  </Row>  
                </CardBlock>
              </Card>
            </TabPane>
            <TabPane tabId="TokenTab">
              <TokenForm handleLogin={this.props.tokenLogin} error={this.props.error === 'Token'}/>
            </TabPane>
          </TabContent>
        </div>
      );
    }
  };
 
  render(){
    let activeComponent = this.getActiveComponent();
    return activeComponent;
  }
}