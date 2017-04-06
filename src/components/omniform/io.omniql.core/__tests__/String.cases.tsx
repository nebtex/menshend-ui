import { IRendererProps, ValidationState } from '../../base';
import { action } from "@kadira/storybook";

let Cases: { [id: string]: IRendererProps<string> } = {};

Cases['Default'] = {
    field: {
        label: 'Default',
        id: "default-1",
        value: "",
        valid: ValidationState.NONE,
        placeholder: "Write here",
        on: {
            change: action("on.change (value:string)"),
            validate: action("on.validate ()")

        }
    }
};

Cases['Invalid'] = {
    field: {
        label: 'Invalid',
        value: 'Invalid field value',
        error: "Invalid field",
        id: "invalid-1",
        valid: ValidationState.INVALID,
        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:string)"),
            validate: action("on.validate ()")
        },
    },
};

Cases['Required'] = {

    field: {
        label: 'Required',
        id: "required-1",
        value: 'Required field value',
        required: true,
        valid: ValidationState.NONE,

        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:string)"),
            validate: action("on.validate ()")
        },
    },
};

Cases['Disabled'] = {
    field: {
        label: 'Disabled',
        id: "disabled-1",
        valid: ValidationState.NONE,

        disabled: true,
        value: '',
        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:string)"),
            validate: action("on.validate ()")
        },
    },
};

Cases['Valid'] = {

    field: {
        label: 'Valid',
        valid: ValidationState.VALID,

        id: "valid-1",

        value: 'Valid field value',
        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:string)"),
            validate: action("on.validate ()")

        },
    },
};

export default Cases;