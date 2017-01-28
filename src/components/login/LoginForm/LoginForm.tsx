import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock, TabContent, TabPane, Nav, NavItem, NavLink, Col, Row } from 'reactstrap';
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
            <Card>
              <CardBlock>
                <Row>
                  <Col md="5" style={{borderRight: '1px solid rgba(0,0,0,.125)'}}>
                    <Button style={{width:'100%'}}><i className="fa fa-github fa-lg"/> | Github Login</Button>
                  </Col>
                  <Col md="7">
                    <UserPasswordForm />
                  </Col>
                </Row>  
              </CardBlock>
            </Card>
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