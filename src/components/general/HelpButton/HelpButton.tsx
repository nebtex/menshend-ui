import * as React from 'react';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import * as classnames from 'classnames';
import * as ReactMarkdown from 'react-markdown';
let styles = require('./HelpButton.scss');

interface IHelpButtonState {
  popoverOpen: boolean;
}

interface IHelpButtonProps {
  title?: string;
  content?: string;
  placement?: string;
  className?: string;
  link?: string;
  linkLabel?: string;
  offsetY?: number;
  offsetX?: number;
}

export default class HelpButton extends React.Component<IHelpButtonProps, IHelpButtonState> {
  
  static defaultProps = {
    title: 'Help',
    content: '',
    placement: 'bottom',
    className: '',
    link:'',
    linkLabel:'',
    offsetX: 0,
    offsetY: 0
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
      <span className={classnames(styles.helpButton, this.props.className)}>
        <i className="fa fa-question-circle" id={id} onClick={this.toggle}/>
        <Popover
          placement={this.props.placement}
          isOpen={this.state.popoverOpen}
          target={id}
          toggle={this.toggle}
          style={{top:this.props.offsetY +'px', left:this.props.offsetX+'px', maxWidth: '360px'}}
          tether={{
            constraints: [
              {
                to: 'scrollParent',
                attachment: 'together',
                pin: true
              }
            ]}
          }>
          <PopoverTitle>{this.props.title}</PopoverTitle>
          <PopoverContent>
            <ReactMarkdown source={ this.props.content }/>
            {this.props.link ? <a href={this.props.link} className={styles.helpLink}>{this.props.linkLabel}</a> : null}
          </PopoverContent>
        </Popover>
      </span>
    );
  }
}