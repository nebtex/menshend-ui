import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import * as classnames from 'classnames';
import UserPasswordForm from './UserPasswordForm';
import TokenForm from './TokenForm';
let styles = require('./LoginForm.scss');

class LoginForm extends React.Component<{},{}> {
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

  render(){
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
            <UserPasswordForm />
          </TabPane>
          <TabPane tabId="2">
            <TokenForm />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default LoginForm;