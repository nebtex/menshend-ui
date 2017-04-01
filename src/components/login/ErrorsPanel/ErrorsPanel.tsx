import * as React from 'react';
import { Card, Alert } from 'reactstrap';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
let styles = require('./ErrorsPanel.scss');

interface IErrorsPanelProps {
  flashes: string[]
}

@observer class ErrorsPanel extends React.Component<IErrorsPanelProps, {}>{
  render(){
    const flashes = toJS(this.props.flashes);

    return (
      <Card className={styles.container}>
        {flashes.map(flash => <Alert color="danger"> {flash} </Alert>)}
      </Card>
    );
  }
}

export default ErrorsPanel;