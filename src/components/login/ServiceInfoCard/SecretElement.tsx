import { BasePath, ownFetch} from '../../../stores/variables';
import * as React from 'react';
import { ListGroupItem, Button, Collapse, Card, CardBlock, Alert } from 'reactstrap';
import { SecretsApi } from '../../../api/api'
import * as classnames from 'classnames';
import * as JSONPretty from 'react-json-pretty';
let styles = require('./SecretElement.scss');

interface ISecretElementProps {
  secret: string;
  serviceId: string;
}

interface ISecretElementState {
  loading: boolean;
  data: string;
  error: boolean;
}

const secretsApi = new SecretsApi();

secretsApi.basePath = BasePath
secretsApi.fetch = ownFetch;


export default class SecretElement extends React.Component<ISecretElementProps, {}> {
  state = {
    data: '',
    loading: false,
    error: false
  }

  handleRead = () => {
    const { secret, serviceId } = this.props;

    secretsApi.readSecret({ id: serviceId + '/' + secret }).then((data) => {
      this.setState({
        data: JSON.stringify(data),
        loading: false
      })
    }).catch((response: Response) => {
      this.setState({
        data: JSON.stringify({
          code: response.status,
          message: response.statusText
        }),
        error: true,
        loading: false
      })
    });

    this.setState({
      loading: true
    });
  }

  getReadButton = () => {
    if (this.state.loading) {
      return <Button color="secondary" size="sm" disabled className={styles.readButton}><i className="fa fa-pulse fa-spinner" /></Button>
    } else {
      return <Button color="secondary" size="sm" onClick={this.handleRead} className={styles.readButton}>Read</Button>
    }
  }

  getResponseComponent = () => {
    if (this.state.error && this.state.data !== '') {
      return (
        <Alert color="danger">
          <JSONPretty json={this.state.data}/>          
        </Alert>
      );
    } else if (this.state.data !== '') {
      return (
        <JSONPretty json={this.state.data}/>
      );
    }
  }

  render() {
    const readButton = this.getReadButton();
    const responseComponent = this.getResponseComponent();

    return (
      <ListGroupItem>
        <div className={styles.mainRow}>
          <span className={styles.secret}>{this.props.secret}</span>
          {readButton}
        </div>
        <Collapse isOpen={this.state.data !== ''} className={styles.collapse}>
          {responseComponent}
        </Collapse>
      </ListGroupItem>
    );
  }
}