import EditableList, { IEditableListProps } from '../EditableList';

let Cases : {[id:string]:IEditableListProps} = {};

Cases['Default'] = {
  items: ['item1', 'item2', 'item3', 'item4', 'item5'],
  handleAdd: function(){},
  handleDelete: function(){}
};

export default Cases;