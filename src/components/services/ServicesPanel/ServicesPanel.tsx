import * as React from 'react';
import * as classnames from 'classnames';
import { IService, IUser } from '../../../models/interface';
import { Col, Container, Row, Form, FormGroup, Input, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Label } from 'reactstrap';
import ServicesList from './ServicesList/ServicesList';
import Fuse = require('fuse.js');
let styles = require('./ServicesPanel.scss');

export interface IServicesPanelProps {
  services: IService[];
  user: IUser;
}

interface IServicesPanelState {
  dropdownOpen: boolean;
  loadingSearch: boolean;
  searchValue: string;
  activeRole: string;
}

let searchTimeout: any;

export default class ServicesPanel extends React.Component<IServicesPanelProps, IServicesPanelState>{
  previousServices:IService[];

  state = {
    dropdownOpen: false,
    searchValue: '',
    activeRole: 'All',
    loadingSearch: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  selectRole = (role: string) => {
    this.setState({
      activeRole: role
    });
  }

  getRolesDropdown = () => {
    let roles: string[] = [];
    this.props.services.forEach(service => {
      service.roles.forEach(role => {
        if (roles.indexOf(role) === -1) {
          roles.push(role);
        }
      });
    });

    roles.sort(function (a, b) {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={styles.rolesDropdown}>
        <DropdownToggle caret>
          {this.state.activeRole}
        </DropdownToggle>
        <DropdownMenu className={styles.rolesContainer}>
          <DropdownItem onClick={() => { this.selectRole('All') }}>{'All'}</DropdownItem>
          <DropdownItem divider />
          {roles.map((role, index) => {
            return <DropdownItem key={index} onClick={() => { this.selectRole(role) }}>{role}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }

  searchOnChange = (evt: any) => {
    evt.persist();
    let searchValue: any = evt && evt.target ? evt.target.value : null;

    if (searchTimeout)
      clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      this.setState({
        loadingSearch: false
      });
    }, 1000);

    this.setState({
      searchValue: searchValue,
      loadingSearch: true
    });
  }

  getServices = () => {
    let services = this.props.services;

    // Active Filter
    if (this.state.activeRole !== 'All') {
      services = services.filter((service) => {
        return service.roles.indexOf(this.state.activeRole) > -1;
      });
    }

    // Apply search criteria
    if (this.state.searchValue !== '' && !this.state.loadingSearch) {
      let options = {
        keys: ['name', 'long_description', 'short_description']
      };
      let f = new Fuse<IService>(services, options);
      services = f.search(this.state.searchValue);
      this.previousServices = services;
    } else if(this.state.loadingSearch){
      services = this.previousServices;
    }

    return services;
  }

  cleanSearch = () => {
    this.setState({
      searchValue: ''
    });
  }

  getSearchIndicator = () => {
    let searchIndicator: any = null;
    if (this.state.searchValue && !this.state.loadingSearch) {
      searchIndicator = <i className={classnames("fa fa-times fa-lg", styles.cleanSearchBtn)} onClick={this.cleanSearch} />;
    } else if (this.state.loadingSearch) {
      searchIndicator = <i className={classnames("fa fa-pulse fa-spinner", styles.searchIndicator)} />;
    }
    return searchIndicator;
  }

  render() {
    let rolesDropdown = this.getRolesDropdown(),
      services = this.getServices(),
      searchIndicator = this.getSearchIndicator();

    return (
      <Container fluid className={styles.panelContainer}>
        <Row className={styles.rowHead}>
          <Col>
            <Form onSubmit={(evt: any) => { evt.preventDefault() }} className={styles.searchForm} inline>
                <FormGroup className={styles.searchFormGroup}>
                  <Input type="test" placeholder="Search" onChange={this.searchOnChange} className={styles.searchInput} value={this.state.searchValue} />
                  {searchIndicator}
                </FormGroup>
                <FormGroup className={styles.rolesFormGroup}>
                  <Label>Role: &nbsp;</Label>
                  {rolesDropdown}
                </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <ServicesList services={services} user={this.props.user} />
        </Row>
      </Container>
    );
  }
}