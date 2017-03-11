import * as React from 'react';
import { Input, Button } from 'reactstrap';
import * as classnames from 'classnames';
let styles = require('./EditableList.scss');

// ***** Editable List Item Component

interface IEditableListItemProps {
  item: string;
  handleDelete: any;
}

const EditableListItem = (props:IEditableListItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.label}> {props.item} </div>
      <div className={classnames(styles.deleteButton, 'deleteButton')} onClick={props.handleDelete}><i className="fa fa-times"/></div>
    </div>
  );
}

// ***** Editable List Component

const ENTER_KEY = 13;

export interface IEditableListProps {
  items: Array<string>;
  handleDelete: any;
  handleAdd: any;
  placeholder?: string;
}

interface IEditableListState {
  inputValue: string;
}

export default class EditableList extends React.Component<IEditableListProps, IEditableListState>{
  static defaultProps = {
    placeholder: '',
    items: new Array()
  }
  
  state = {
    inputValue: ''
  }
  
  getItems = () => {
    const { items } = this.props;
    return items.map((item, index) => {
      return <EditableListItem key={index} item={item} handleDelete={() => {this.props.handleDelete(item)}}/>
    })
  }

  onChange = (evt:any) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  onKeydown = (evt:any) => {
    if(evt.keyCode === ENTER_KEY){
      evt.stopPropagation();
      this.props.handleAdd(this.state.inputValue);
      this.setState({
        inputValue:''
      })
    }
  }

  addOnClick = () => {
    this.props.handleAdd(this.state.inputValue);
    this.setState({
      inputValue:''
    })
  }

  render() {
    const items = this.getItems();
    return (
      <div className={styles.editableList}>
        <div className={styles.itemsContainer}>
          {items}
        </div>
        <div className={styles.inputContainer}>
          <Input
            className={styles.input}
            onChange={this.onChange}
            value={this.state.inputValue}
            onKeyDown={this.onKeydown}
            placeholder={this.props.placeholder}/>
          <Button color="secondary" className={styles.addButton} onClick={this.addOnClick}>Add</Button>
        </div>
      </div>
    );
  }
}