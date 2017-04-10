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
import { ClientService } from '../api/api';

interface IServicesProps {
  services?: Array<ClientService>;
  loginStatus?: any;
  space?: any;
}

export default class Services extends React.Component<IServicesProps, {}>{
  render() {
    const errorVisibility = adminStore.error ? "visible" : "hidden"

    return (
      <div>
        <FullModal on={{mount:()=>{adminStore.load()}}} isOpen={adminStore.showModal} title={adminStore.isNewService ? "Create service" : `Edit ${adminStore.currentServiceName} service`}>
          <Alert color="danger" style={{ visibility: errorVisibility }}>{adminStore.error}</Alert>
          <Container style={{ width: "100%" }}>
            <Row flex>
              <Col sm="12" lg="3">
                <OmniExplorer omniForm={adminForm} on={{ itemClick: function (id: OmniFormID) { adminForm.setView(id); } }} />
              </Col>
              <Col>
                <ViewContainer id={adminForm.currentView}></ViewContainer>
              </Col>
            </Row>
          </Container>
        </FullModal>
        <NavBar environment={this.props.space} />
        <ServicesPanel
          services={this.props.services}
          loginStatus={this.props.loginStatus} />

        {this.props.children}
      </div>
    );
  }
}