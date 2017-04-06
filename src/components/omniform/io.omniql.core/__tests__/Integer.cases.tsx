import { IRendererProps, ValidationState } from '../../base';
import { action } from "@kadira/storybook";

let Cases: { [id: string]: IRendererProps<number> } = {};

Cases['Default'] = {
    field: {
        label: 'Default',
        id: "default-1",
        value: 0,
        valid: ValidationState.NONE,
        placeholder: "Write here",
        on: {
            change: action("on.change (value:number)"),
            validate: action("on.validate ()")
        }
    }
};

Cases['Invalid'] = {
    field: {
        label: 'Invalid',
        value: 0,
        error: "Invalid field",
        id: "invalid-1",
        valid: ValidationState.INVALID,
        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:number)"),
            validate: action("on.validate ()")


        },
    },
};

Cases['Required'] = {

    field: {
        label: 'Required',
        id: "required",
        value: 0,
        required: true,
        valid: ValidationState.NONE,
        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:number)"),
            validate: action("on.validate ()")

        },
    },
};

Cases['Disabled'] = {
    field: {
        label: 'Disabled',
        id: "disabled-1",
        disabled: true,
        valid: ValidationState.NONE,
        value: 0,
        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:number)"),
            validate: action("on.validate ()")
        },
    },
};

Cases['Valid'] = {

    field: {
        label: 'Valid',
        valid: ValidationState.VALID,
        id: "valid-1",
        value: 0,
        help: {
            short: "Short description",
            long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
        },
        on: {
            change: action("on.change (value:number)"),
            validate: action("on.validate ()")


        },
    },
};

export default Cases;