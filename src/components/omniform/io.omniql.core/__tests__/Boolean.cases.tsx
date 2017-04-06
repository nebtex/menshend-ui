import { IRendererProps, ValidationState } from '../../base';
import { action } from "@kadira/storybook";

let Cases: { [id: string]: IRendererProps<boolean> } = {};

Cases['Default'] = {
	field: {
		label: 'Default',
		id: "default-1",
		valid: ValidationState.NONE,
		value: false,
		help: {
			short: "Short description"
		},
		on: {
			change: action("on.change (value:boolean)"),
			validate: action("on.validate ()")
		}
	}
};

Cases['Required'] = {

	field: {
		label: 'Required',
		id: "required-1",
		value: true,
		valid: ValidationState.NONE,
		required: true,
		help: {
			short: "Short description",
			long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
		},
		on: {
			change: action("on.change (value:boolean)"),
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
		value: false,
		help: {
			short: "Short description",
			long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
		},
		on: {
			change: action("on.change (value:boolean)"),
			validate: action("on.validate ()")
		},
	},
};

export default Cases;