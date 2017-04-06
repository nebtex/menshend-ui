import { IRendererProps, ValidationState } from '../../base';
import { action } from "@kadira/storybook";

let Cases: { [id: string]: IRendererProps<string> } = {};

Cases['Default'] = {
  field: {
    label: 'Default',
    id: "default-code",
    valid: ValidationState.NONE,
    value: "# This is my test value",
    help: {
      short: "Short description"
    },
    on: {
      change: action("on.change (value:string)")
    }
  }
};

Cases['Invalid'] = {
  field: {
    label: 'Invalid',
    value: "# This is my test value",
    error: "Invalid field",
    id: "invalid-1",

    valid: ValidationState.INVALID,

    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    on: {
      change: action("on.change (value:string)")
    },
  },
};

Cases['Required'] = {
  field: {
    label: 'Required',
    id: "required-1",
    value: "# This is my test value",
    required: true,
    valid: ValidationState.NONE,

    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    on: {
      change: action("on.change (value:string)")
    },
  },
};

Cases['Disabled'] = {
  field: {
    label: 'Disabled',
    id: "disabled-1",
    disabled: true,
    valid: ValidationState.NONE,

    value: "# This is my test value",
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    on: {
      change: action("on.change (value:string)")
    },
  },
};

Cases['Valid'] = {

  field: {
    label: 'Valid',
    valid: ValidationState.VALID,

    id: "valid-1",
    value: "# This is my test value",
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    on: {
      change: action("on.change (value:string)")
    }
  },
};

export default Cases;