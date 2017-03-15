import * as React from 'react';
import * as classnames from 'classnames';
import { IService, IUser } from '../../../models/interface';
import ServicesList from './ServicesList/ServicesList';
import Fuse = require('fuse.js');
import EditModal from '../EditModal/EditModal';
import { Link } from 'react-router';
import { ClientService } from '../../../api/api';
import { Col, Container, Row, Form, FormGroup, Input, Dropdown, 
         DropdownItem, DropdownMenu, DropdownToggle, Label } from 'reactstrap';

let styles = require('./ServicesPanel.scss');

export interface IServicesPanelProps {
  services: ClientService[];
  user: IUser;
  activeRole?: string;
}

interface IServicesPanelState {
  dropdownOpen: boolean;
  loadingSearch: boolean;
  searchValue: string;
  editModalOpen: boolean;
  modalService?: ClientService;
}

let searchTimeout: any;

export default class ServicesPanel extends React.Component<IServicesPanelProps, IServicesPanelState>{
  previousServices:ClientService[];

  state = {
    dropdownOpen: false,
    searchValue: '',
    loadingSearch: false,
    editModalOpen: false,
    modalService: this.props.services[0]
  }

  static defaultProps = {
    activeRole: 'All'
  }

  toggleEditModalOpen = () => {
    this.setState({
      editModalOpen: !this.state.editModalOpen
    });
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  getRoles = () => {
    let roles: string[] = [];
    this.props.services.forEach(service => {
      if (roles.indexOf(service.roleId) === -1) {
        roles.push(service.roleId);
      }
    });

    roles.sort(function (a, b) {
      return a.localeCompare(b);
    });
    return roles;
  }

  getRolesDropdown = () => {
    const roles = this.getRoles();

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={styles.rolesDropdown}>
        <DropdownToggle caret>
          {this.props.activeRole}
        </DropdownToggle>
        <DropdownMenu className={styles.rolesContainer}>
          <DropdownItem className={styles.roleDropdownItem}> 
            <Link to={`/ui/services`} className={styles.roleLink}>{'All'}</Link>
          </DropdownItem>
          <DropdownItem divider />
          {roles.map((role, index) => {
            return( 
              <DropdownItem key={index} className={classnames("role", styles.roleDropdownItem)}>
                <Link to={`/ui/services/role/${role}`} className={styles.roleLink}>{role}</Link>
              </DropdownItem>
            );
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
    if (this.props.activeRole !== 'All') {
      services = services.filter((service) => {
        return service.roleId === this.props.activeRole;
      });
    }

    if (this.state.searchValue === ''){
      this.previousServices = services;
    } else if (this.state.searchValue !== '' && !this.state.loadingSearch) {
      // Apply search criteria
      let options = {
        keys: ['name', 'long_description', 'short_description']
      };
      let f = new Fuse<ClientService>(services, options);
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

  setModalService = (service:ClientService) => {
    this.setState({
      modalService:service,
      editModalOpen: true
    });
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
        <Row className={styles.serviceList}>
          <ServicesList 
            services={services} 
            user={this.props.user} 
            loading={this.state.loadingSearch} 
            openEditModal={this.setModalService}/>
        </Row>
      </Container>
    );
  }
}