import * as React from 'react';
import * as classnames from 'classnames';
import { NavLink, Nav, NavItem} from 'reactstrap';
let styles = require('./NavBar.scss');

interface INavBarProps {
  activeTab?: string;
  toggleTab?: any;
}

export default class NavBar extends React.Component<INavBarProps, {}>{

  static defaultProps = {
    activeTab: 'general'
  }

  render(){
    return (
      <Nav className={styles.navBar} tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === 'general' })}
            onClick={() => { this.props.toggleTab('general'); }}
          >
            General
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === 'shortDescription' })}
            onClick={() => { this.props.toggleTab('shortDescription'); }}
          >
            Short description
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === 'longDescription' })}
            onClick={() => { this.props.toggleTab('longDescription'); }}
          >
            Long description
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === 'cache' })}
            onClick={() => { this.props.toggleTab('cache'); }}
          >
            Cache
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === 'cors' })}
            onClick={() => { this.props.toggleTab('cors'); }}
          >
            CORS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === 'secretPaths' })}
            onClick={() => { this.props.toggleTab('secretPaths'); }}
          >
            Secret paths
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}