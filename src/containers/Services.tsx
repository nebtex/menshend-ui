import FullModal from '../components/modals/FullModal';
import { observer } from 'mobx-react';
import * as React from 'react';
import NavBar from '../components/services/NavBar/NavBar';
import ServicesPanel from '../components/services/ServicesPanel/ServicesPanel';
import { Modal, Alert, Container, Row, Col } from 'reactstrap'
import adminStore from '../stores/editServiceFormStore'
import { adminForm } from '../components/edit-modal-omniform/EditModal'
import { OmniExplorer, ViewContainer } from '../components/omniform/io.omniql.core/OmniExplorer'
import { OmniFormID } from '../components/omniform/base'
const mockEnvironment = {
  name: 'Kuper',
  short_description: 'short description',
  long_description: 'long_description',
  logo: ''
};

const mockServices = [
  {
    id: 'role/role2/subdomain13',
    subDomain: 'subdomain13',
    name: 'My Test Service',
    shortDescription: 'My test service short description',
    longDescription: 'My test service long description',
    logo: "http://placehold.it/64x64",
    roleId: 'role2'
  },
  {
    id: 'role/role1/subdomain13',
    subDomain: 'subdomain13',
    name: 'My Test Service',
    shortDescription: 'My test service short description',
    longDescription: 'My test service long description',
    logo: "http://placehold.it/64x64",
    roleId: 'role1'
  }
];

const mockUser = {
  isLogged: true,
  expiresAt: Date.now() + 3600000,
  isAdmin: true,
  canImpersonate: true
}

interface IServicesProps {
}
@observer
export default class Services extends React.Component<IServicesProps, {}>{

  render() {
    const errorVisibility = adminStore.error ? "visible" : "hidden"

    return (
      <div>
        <FullModal on={{mount:()=>{adminStore.load()}}} isOpen={adminStore.showModal} title={adminStore.isNewService ? "Create service" : `Edit ${adminStore.currentServiceName} service`}>
          <Alert color="danger" style={{ visibility: errorVisibility }}>{adminStore.error}</Alert>
          <Container style={{ width: "100%" }}>
            <Row flex>
              <Col xs="3">
                <OmniExplorer omniForm={adminForm} on={{ itemClick: function (id: OmniFormID) { adminForm.setView(id); } }} />
              </Col>
              <Col>
                <ViewContainer id={adminForm.currentView}></ViewContainer>
              </Col>
            </Row>
          </Container>
        </FullModal>
        <NavBar environment={mockEnvironment} />
        <ServicesPanel
          services={mockServices}
          user={mockUser}
          activeRole={"roleId"} />

        {this.props.children}
      </div>
    );
  }
}