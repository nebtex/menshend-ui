import * as React from "react";
import HelpButton from "../../HelpButton/HelpButton";
import Enum from './Enum';
import { IRendererProps, IRenderer, ITableProps, IUnionProps } from '../base';
import { Row, Container } from "reactstrap";


const Union: React.StatelessComponent<IUnionProps> = (props: IUnionProps) => {
  const enumField = props.selector.props.field
  const activeTable = props.tables.length > 0 && props.tables[enumField.value] ? props.tables[enumField.value] : null;
  //create options
  let options: string[] = [];

  for (let table of props.tables) {
    options.push(table.props.name)
  }

  if (activeTable) {
    const Renderer = activeTable.renderer;
    return (
      <Container className={props.theme.union} fluid>
        <Row>
          <props.selector.renderer {...props.selector.props} options={options} />
        </Row>
        <Row>
          <Renderer {...activeTable.props} />
        </Row>
      </Container>
    );
  } else {
    return null;
  }
};

Union.defaultProps = {
  tables: [],
  theme: {}
}

export default Union;