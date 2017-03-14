import * as React from 'react';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import * as classnames from 'classnames';
import * as ReactMarkdown from 'react-markdown';
let styles = require('./HelpButton.scss');

interface IHelpButtonState {
  popoverOpen: boolean;
}

interface IHelpButtonProps {
  content?: string;
  placement?: string;
  className?: string;
  link?: string;
  linkLabel?: string;
}

export default class HelpButton extends React.Component<IHelpButtonProps, IHelpButtonState> {
  
  static defaultProps = {
    content: '',
    placement: 'bottom',
    className: '',
    link:'',
    linkLabel:''
  }

  state = {
    popoverOpen: false
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  getIdentifier = () => {
    return 'ixxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  render() {
    const id = this.getIdentifier();
    return (
      <span>
        <i className={classnames("fa fa-question-circle", styles.helpButton, this.props.className)} id={id} onClick={this.toggle}/>
        <Popover placement={this.props.placement} isOpen={this.state.popoverOpen} target={id} toggle={this.toggle}>
          <PopoverTitle>Help</PopoverTitle>
          <PopoverContent>
            <ReactMarkdown source={ this.props.content }/>
            {this.props.link ? <a href={this.props.link} className={styles.helpLink}>{this.props.linkLabel}</a> : null}
          </PopoverContent>
        </Popover>
      </span>
    );
  }
}