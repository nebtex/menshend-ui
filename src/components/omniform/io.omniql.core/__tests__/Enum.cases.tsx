import { ValidationState, IEnumProps } from '../../base';
import { action } from "@kadira/storybook";

let Cases: { [id: string]: IEnumProps } = {};

Cases['Default'] = {
    options: ['option0', 'option1', 'option2', 'option3', 'option4'],
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
    options: ['option0', 'option1', 'option2', 'option3', 'option4'],
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
    options: ['option0', 'option1', 'option2', 'option3', 'option4'],
    field: {
        label: 'Required',
        id: "required",
        value: 0,
        valid: ValidationState.NONE,
        required: true,
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
    options: ['option0', 'option1', 'option2', 'option3', 'option4'],
    field: {
        label: 'Disabled',
        id: "disabled-1",
        disabled: true,
        value: 0,
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

Cases['Valid'] = {
    options: ['option0', 'option1', 'option2', 'option3', 'option4'],
    field: {
        label: 'Valid',
        id: "valid-1",
        value: 4,
        valid: ValidationState.VALID,
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