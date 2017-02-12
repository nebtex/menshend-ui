import * as React from 'react';
import * as classnames from 'classnames';
import Highlight = require('react-syntax-highlight');
import 'highlight.js/styles/atom-one-dark.css';
let styles = require('./CodeEditor.scss');

interface ICodeEditorProps {
  value: string;
  lang: string;
  onChange: any;
}

export default class CodeEditor extends React.Component<ICodeEditorProps, {}>{
  render(){
    return (
      <div className={styles.container}>
        <Highlight lang={this.props.lang} value={this.props.value}/>
        <pre className={styles.pre}>
          <code
            className={classnames('hljs', styles.textarea)}
            spellCheck={false}
            contentEditable
            onInput={this.props.onChange}>
            {this.props.value}
          </code>
        </pre>
      </div>
    );
  }
}