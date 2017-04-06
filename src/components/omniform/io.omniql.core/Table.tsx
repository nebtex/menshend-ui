import * as React from 'react';
import { FormField, IRendererProps, IRenderer, FieldInline, OmniDescription, ITableProps } from '../base';
import { Form, Row, Col, Container } from 'reactstrap';
let styles = require('./Table.scss');

export interface RowTable extends ITableProps {
  rows?: string[][]
}


const Table: React.StatelessComponent<RowTable> = (props: RowTable) => {
  let drawFields: string[] = [];

  return (
    <Container className={props.theme.table} fluid>
      <Form onSubmit={(e: any) => { e.preventDefault() }} >
        {/* draw field specified in rows prop */}
        {props.rows.map((row, index) => {
          return (
            <Row className={props.theme.row} key={index}>
              {row.map((fieldName: string, subIndex) => {
                drawFields.push(fieldName)
                let widget = props.widgetMap.get(fieldName)
                return (
                  <Col key={subIndex} className={styles.col}>
                    <widget.renderer {...widget.props} />
                  </Col>
                )
              })}
            </Row>
          );
        })}
        {/* draw left fields */}
        {Array.from<string>(props.widgetMap.keys()).map((fieldName: string, index: number) => {
          if (drawFields.indexOf(fieldName) >= 0) {
            return null;
          }
          let widget = props.widgetMap.get(fieldName)
          return (
            <Row className={props.theme.row} key={index}>
              <Col className={styles.col}>
                <widget.renderer {...widget.props} />
              </Col>
            </Row>
          )
        })
        }
      </Form>
    </Container>

  );
}

Table.defaultProps = {
  theme: styles,
  rows: []
}

Table.displayName = "Table"

export default Table;