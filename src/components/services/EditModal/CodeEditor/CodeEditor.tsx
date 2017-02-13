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

interface ICodeEditorState {
  lang:string;
  value:string;
}

export default class CodeEditor extends React.Component<ICodeEditorProps, ICodeEditorState>{
  constructor(props:ICodeEditorProps){
    super(props);
    this.state = {
      value: this.props.value,
      lang: this.props.lang
    };
  }

  onInput = (e:any) => {
    this.props.onChange(e.target.innerText);
    this.setState({ value: e.target.innerText });
  }

  render(){
    return (
      <div className={styles.container}>
        <Highlight
          lang={this.state.lang}
          value={this.state.value}
        />
        <pre className={styles.pre}>
          <code
            className= {classnames('hljs', styles.textarea)}
            contentEditable
            spellCheck={false}
            onInput={this.onInput}>
            {this.props.value /* only init once time */}
          </code>
        </pre>
      </div>
    );
  }
}