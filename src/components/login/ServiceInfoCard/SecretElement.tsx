import * as React from 'react';
import { ListGroupItem, Button, Collapse, Card, CardBlock } from 'reactstrap';
import { SecretsApi } from '../../../api/api'
let styles = require('./SecretElement.scss');

interface ISecretElementProps {
  secret: string;
  serviceId: string;
}

interface ISecretElementState {
  loading: boolean;
  data: string;
}

const secretsApi = new SecretsApi();

export default class SecretElement extends React.Component<ISecretElementProps, {}> {
  state = {
    data: '',
    loading: false
  }

  handleRead = () => {
    const { secret, serviceId } = this.props;

    secretsApi.readSecret({id:serviceId+'/'+secret}).then((data) => {
      this.setState({
        data: JSON.stringify(data),
        loading: false
      })
    });

    this.setState({
      loading: true
    })
  }

  getReadButton = () => {
    if (this.state.loading) {
      return <Button color="secondary" size="sm" disabled className={styles.readButton}><i className="fa fa-pulse fa-spinner"/></Button>
    }else {
      return <Button color="secondary" size="sm" onClick={this.handleRead} className={styles.readButton}>Read</Button>
    }
  }

  render() {
    const readButton = this.getReadButton();

    return (
      <ListGroupItem>
        <div className={styles.mainRow}>
          <span className={styles.secret}>{this.props.secret}</span>
          {readButton}
        </div>

        <Collapse isOpen={this.state.data!==''}>
          <Card>
            <CardBlock>
              {this.state.data}
            </CardBlock>
          </Card>
        </Collapse>
      </ListGroupItem>
    );
  }
}