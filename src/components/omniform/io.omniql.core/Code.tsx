import * as React from 'react';
import { IRendererProps, ValidationState } from '../base';
import { FormGroup, Label, FormFeedback, FormText } from 'reactstrap';
import Monaco from '../../monaco/Monaco';
import HelpButton from '../../HelpButton/HelpButton';
let styles = require('./Code.scss');

interface ITheme {
  container?: string;
}

const Code: React.StatelessComponent<IRendererProps<string>> = (props: IRendererProps<string>) => {
  const { field, theme } = props;
  let stateColor;

  switch (props.field.valid) {
    case ValidationState.INVALID:
      stateColor = 'danger';
      break;
    case ValidationState.VALID:
      stateColor = 'success';
      break;
    default:
      stateColor = '';
  }

  return (
    <FormGroup className={theme.formGroup} color={stateColor} disabled={props.field.disabled}>
      <Label className={theme.label}>{field.label}</Label>
      {props.field.help && props.field.help.long ? <HelpButton content={props.field.help.long} /> : null}
      {props.field.required ? <span className={props.theme.requiredSymbol}>●</span> : null}
      <div className={theme.editor}>
        <Monaco
          width='100%'
          height='100%'
          language='lua'
          theme='vs-dark'
          options={{ readOnly: field.disabled }}
          value={field.value}
          onChange={(value: string, evt: any) => field.on.change(value)} />
      </div>
      {props.field.error ?
        <FormFeedback className={props.theme.feedback}>{props.field.error}</FormFeedback> : null}
      {props.field.help && props.field.help.short ?
        <FormText color="muted" className={props.theme.shortHelp}>{props.field.help.short}</FormText> : null}
    </FormGroup>
  );
}

Code.defaultProps = {
  theme: styles
}

export default Code;