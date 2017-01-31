import * as React from 'react';
import { Form, FormGroup, Label, Input, Card, CardBlock, TabContent, TabPane, Nav, NavItem, NavLink, Col, Row, Button } from 'reactstrap';
import * as classnames from 'classnames';
import UserPassForm from './UserPassForm';
import TokenForm from './TokenForm';
import GithubLogin from './GithubLogin';
import { IUser } from '../../../models/interface';
import SessionCounter from '../SessionCounter';
let styles = require('./LoginForm.scss');

export interface ILoginFormProps {
  githubLogin() : void;
  tokenLogin(token:string) : void;
  userPassLogin(user:string, pass:string) : void;
  user: IUser;
}

interface ILoginFormState {
  activeTab:string;
}

export default class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
  state = {
    activeTab: '1'
  };

  toggle = (tab:string) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

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
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                User/password
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Token
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Card>
                <CardBlock>
                  <Row>
                    <Col md="5" style={{borderRight: '1px solid rgba(0,0,0,.125)'}}>
                      <GithubLogin handleLogin={this.props.githubLogin}/>
                    </Col>
                    <Col md="7">
                      <UserPassForm handleLogin={this.props.userPassLogin}/>
                    </Col>
                  </Row>  
                </CardBlock>
              </Card>
            </TabPane>
            <TabPane tabId="2">
              <TokenForm handleLogin={this.props.tokenLogin}/>
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