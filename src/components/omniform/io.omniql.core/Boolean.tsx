import * as React from 'react';
import { Label, Input, FormGroup, FormFeedback, FormText } from 'reactstrap';
import HelpButton from '../../HelpButton/HelpButton';
import { IRendererProps, IRenderer } from '../base';
let styles = require('./Boolean.scss');

export interface IBooleanTheme {
  feedback?: string;
  requiredSymbol?: string;
  shortHelp?: string;
  label?: string;
  formGroup?: string;
  labelContainer?: string;
}

const Boolean: IRenderer<boolean> = (props: IRendererProps<boolean>) => {
  let field = props.field
  let theme = props.theme
  return (
    <FormGroup check disabled={field.disabled} className={theme.formGroup} onClick={(evt: any) => { field.on.change(!field.value) }}>
      <div className={theme.labelContainer}>
        <Label className={theme.label}>
          {field.label}
        </Label>
        {field.help && field.help.long ? <HelpButton content={field.help.long} /> : null}
        {field.required ? <span className={theme.requiredSymbol}>●</span> : null}
      </div>
      <Label check>
        <Input
          type="checkbox"
          id={field.id}
          checked={field.value}
          onBlur={(evt: any) => { field.on.validate() }}
          disabled={field.disabled} />{' '}
        {field.help && field.help.short ?
          <FormText color="muted" className={theme.shortHelp}>{field.help.short}</FormText> : null}
      </Label>
      {field.error ?
        <FormFeedback className={theme.feedback}>{field.error}</FormFeedback> : null}
    </FormGroup>
  );
}

Boolean.defaultProps = {
  theme: styles
}

Boolean.displayName = "Boolean"

export default Boolean;