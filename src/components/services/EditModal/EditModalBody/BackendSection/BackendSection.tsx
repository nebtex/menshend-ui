import * as React from 'react';
import { Row, Label, Input, FormGroup, Tooltip } from 'reactstrap';
import MonacoEditor from 'react-monaco-editor';
let styles = require('./BackendSection.scss');

interface IBackendSectionProps {
  codeOnChange: any;
}

interface IBackendSectionState {
  impersonateTooltipOpen: boolean;
  proxyTooltipOpen: boolean;
}

export default class BackendSection extends React.Component<IBackendSectionProps, {}>{

  state = {
    impersonateTooltipOpen: false,
    proxyTooltipOpen: false 
  }
  
  toggleImpersonateTooltip = () => {
    this.setState({
      impersonateTooltipOpen: !this.state.impersonateTooltipOpen
    });
  }

  toggleProxyTooltip = () => {
    this.setState({
      proxyTooltipOpen: !this.state.proxyTooltipOpen
    });
  }

  render() {
    const requireConfig = {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
      paths: {
        'vs': 'https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs'
      }
    };
    
    return (
      <div>
        <hr/>
        <h5>Backend rule</h5>
        <Row className={styles.rolesRow}>
        </Row>
        <MonacoEditor 
          height={300}
          language='lua'
          requireConfig={requireConfig}
          onChange={this.props.codeOnChange}
          defaultValue="__=== type your code here ==="
          options={{
            theme:'vs-dark'
          }}/>
      </div>
    );
  }
}