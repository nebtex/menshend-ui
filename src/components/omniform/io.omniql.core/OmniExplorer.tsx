import { TableView, UnionView } from './Builder';
import * as React from 'react';
import { ListGroup, ListGroupItem,Container, Row } from 'reactstrap';
let styles = require('./FileExplorer.scss');
import * as classnames from 'classnames';
import { FieldInline, FormField, IEnumProps, OmniFormID, View } from '../base';
import omniFormStore, { OmniForm } from './Builder'
import { observer } from 'mobx-react';
import Enum from './Enum';


interface ITheme {
  padding: string;
  item: string;
  folder: string;
  state: string;
  file: string;
  content: string;
  open: string;
  close: string;
  highlighted: string;
}

interface IFileStructure {
  id: string;
  name: string;
  type?: string;
  children?: IFileStructure[];
}

export interface IOmniExplorerProps {
  on?: {
    itemClick?: { (objectID: OmniFormID): void };
  }
  omniForm?: OmniForm;
  theme?: ITheme;
}

export interface IOmniExplorerItemProps {
  name: string
  className?: string
  opened: boolean
  focused: boolean
  id: OmniFormID
  theme: any
  deepLevel: number
  on: {
    click: { (objectID: OmniFormID): void };
  }
}

@observer
export class OmniExplorerItem extends React.Component<IOmniExplorerItemProps, any> {
  render() {
    let padding: React.ReactElement<any>[] = []

    //create padding
    for (let i = 0; i < this.props.deepLevel; i++) {
      padding.push(<div key={i} className={this.props.theme.padding} />)
    }

    let itemStyle = [this.props.theme.item]
    let highlightedStyle = this.props.focused ? this.props.theme.highlighted : null;

    return <ListGroupItem
      key={this.props.id.hash()}
      tag="a"
      action
      className={classnames(itemStyle, this.props.className, highlightedStyle)}
      onClick={() => { this.props.on && this.props.on.click(this.props.id) }} on>
      {padding}
      {this.props.opened ? <i className={classnames(this.props.theme.state, this.props.theme.open)} /> : <i className={classnames(this.props.theme.state, this.props.theme.close)} />}
      <p className={this.props.theme.content}>
        {this.props.name}
      </p>
    </ListGroupItem>
  }
}


@observer
export class OmniExplorer extends React.Component<IOmniExplorerProps, any> {
  static defaultProps: Partial<IOmniExplorerProps> = {
    theme: styles
  };

  buildExplorer = (ids: OmniFormID[], deepLevel: number): React.ReactElement<any>[] => {
    ids = ids || [];
    let components: React.ReactElement<any>[] = []

    for (let id of ids) {
      //ignore fields 
      if (!(id.isTable() || id.isUnion())) {
        continue
      }

      let view = omniFormStore.objects.get(id) as View


      let viewChildren: OmniFormID[] = []
      if (id.isTable()) {
        for (let c of id.children) {
          if (c.isTable() || c.isUnion()) {
            viewChildren.push(c)
          }
        }
      }
      if (id.isUnion()) {
        let uv = view as UnionView
        for (let c of uv.field.value.children) {
          if (c.isTable() || c.isUnion()) {
            viewChildren.push(c)
          }
        }
      }

      let itemStyle: string = viewChildren.length > 0 ? this.props.theme.folder : this.props.theme.file

      components.push(<OmniExplorerItem
        on={{ click: this.props.on && this.props.on.itemClick }}
        deepLevel={deepLevel}
        theme={this.props.theme}
        name={view.name}
        opened={view.opened}
        focused={this.props.omniForm.currentView == id}
        id={id}
        className={itemStyle}
        key={id.hash()} />)

      if (viewChildren.length > 0) {
        components = components.concat(this.buildExplorer(viewChildren, deepLevel + 1));
      }
    }
    return components
  }

  render() {
    const components = this.buildExplorer(this.props.omniForm.id.children, 0);
    return <ListGroup>{components}</ListGroup>;
  }
}

interface ViewContainerProps {
  id: OmniFormID

}



@observer
export class TableContainer extends React.Component<ViewContainerProps, any>{
  buildMap(id: OmniFormID): Map<string, FieldInline> {
    let result = new Map<string, FieldInline>()
    if (id.isTable()) {
      for (let c of id.children) {
        if (c.isTable() || c.isUnion()) {
          continue
        }
        let field = omniFormStore.objects.get(c) as FieldInline
        result.set(field.props.field.name, field)
      }
    }
    return result
  }
  render() {
    let id = this.props.id;
    if (id.isTable()) {
      let view = omniFormStore.objects.get(id) as TableView

      let widgetMap = this.buildMap(id)
      return <view.renderer {...view.props} widgetMap={widgetMap} style={{overflowY:"scroll"}} />
    }
    return null
  }
}



@observer
export class ViewContainer extends React.Component<ViewContainerProps, any>{
  buildMap(id: OmniFormID): Map<string, FieldInline> {
    let result = new Map<string, FieldInline>()
    if (id.isTable()) {
      for (let c of id.children) {
        if (c.isTable() || c.isUnion()) {
          continue
        }
        let field = omniFormStore.objects.get(c) as FieldInline
        result.set(field.props.field.name, field)
      }
    }
    return result
  }
  render() {
    let OEnum = observer(Enum)
    let id = this.props.id;
    if (id.isTable()) {
      return <TableContainer id={id} />

    } else if (id.isUnion()) {
      let view = omniFormStore.objects.get(id) as UnionView
      let options: string[] = []
      let optionsId: OmniFormID[]=[]
      for(let tid of view.id.children){
        let tView = omniFormStore.objects.get(tid) as TableView
        options.push(tView.name)
        optionsId.push(tView.id)

      }
      let tableId = view.field.value

        view.nField.on.change = (v:number)=>{
            view.nField.value = v
            view.field.value = optionsId[v]
    }
      return<Container styles={{"width": "100%"}} fluid>
        <Container fluid>
        <Row>
            <OEnum options={options} field={view.nField} />
        </Row>
        </Container>
        <hr/>
        <TableContainer id={tableId} />
       </Container>

    }
    return null
  }
}

export default OmniExplorer;