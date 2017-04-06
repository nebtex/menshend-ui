import * as React from "react";
import * as classnames from "classnames";
import {
    Button,
    Label,
    FormGroup,
    FormFeedback,
    FormText,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import HelpButton from "../../HelpButton/HelpButton";
import { FormField, IRendererProps, IRenderer, ValidationState } from "../base";
let styles = require('./StringVector.scss');

export interface IStringVectorTheme {
    label?: string;
    item?: string;
    itemLabel?: string;
    deleteButton?: string;
    addButton?: string;
    input?: string;
    inputContainer?: string;
    itemsContainer?: string;
    stringVector?: string;
    requiredSymbol?: string;
    feedback?: string;
    shortHelp?: string;
    validInput?: string;
    invalidInput?: string;
    validFeedback?: string;
    invalidFeedback?: string;
    labelContainer?: string;
}

const StringVector: IRenderer<string[]> = (props: IRendererProps<string[]>) => {
    let field = props.field
    let theme = props.theme
    let inputRef: HTMLInputElement;
    let stateColor, inputStateClass;
    const list = field.value;

    switch (field.valid) {
        case ValidationState.INVALID:
            stateColor = 'danger';
            inputStateClass = classnames('form-control-danger', theme.invalidInput)
            break;
        case ValidationState.VALID:
            stateColor = 'success';
            inputStateClass = classnames('form-control-success', theme.validInput)
            break;

        default:
            stateColor = '';
            inputStateClass = '';
    }

    return (
        <FormGroup className={theme.stringVector} color={stateColor}>
            {field.label ? <Label
                className={theme.label}>{field.label}</Label> : null}
            {field.help && field.help.long ?
                <HelpButton content={field.help.long} /> : null}
            {field.required ?
                <span className={theme.requiredSymbol}>●</span> : null}

            <div className={theme.inputContainer}>
                <input
                    className={classnames('form-control', inputStateClass, theme.input)}
                    disabled={field.disabled}
                    placeholder={field.placeholder}
                    ref={(el: HTMLInputElement) => inputRef = el}
                    id={field.id} />
                <Button
                    color="secondary"
                    className={theme.addButton}
                    onClick={
                        () => {
                            if (inputRef.value) {
                                field.on.change([inputRef.value].concat(list.slice()));
                                inputRef.value = '';
                                field.on.validate();
                            }
                        }}>Add</Button>
            </div>
            {field.error ?
                <FormFeedback
                    className={theme.feedback}>{field.error}</FormFeedback> : null}
            {field.help && field.help.short ?
                <FormText color="muted"
                    className={theme.shortHelp}>{field.help.short}</FormText> : null}
            <ListGroup>
                {list.map((item: string, index: number) => {
                    return (
                        <ListGroupItem className={theme.item} key={index}>
                            <div className={theme.itemLabel}> {item} </div>
                            <div className={theme.deleteButton}
                                onClick={() => {
                                    field.on.change([...list.slice(0, index), ...list.slice(index + 1)]);
                                }}><i className="fa fa-times" /></div>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        </FormGroup>
    );
}

StringVector.defaultProps = {
    theme: styles
}
StringVector.displayName = "StringVector"

export default StringVector;