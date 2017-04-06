import { IRendererProps, ValidationState } from '../../base';
import { action } from "@kadira/storybook";
let testLogo = require('../../../../assets/testLogo.svg');

let Cases: { [id: string]: IRendererProps<string[]> } = {};

Cases['Default'] = {
  field: {
    id: 'Default-1',
    label: 'Default',
    valid: ValidationState.NONE,
    on: {
      change: action("on.change (value:string[])")
    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    value: []
  }
}

Cases['One item'] = {
  field: {
    id: 'Default-1',
    valid: ValidationState.NONE,

    label: 'One item',
    on: {
      change: action("on.change (value:string[])"),
      validate: action("on.validate ()")

    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    value: ['item1']
  }
}

Cases['Invalid'] = {
  field: {
    id: 'Default-1',
    label: 'Invalid',
    on: {
      change: action("on.change (value:string[])"),
      validate: action("on.validate ()")

    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    value: ['item1'],
    error: "Invalid field",
    valid: ValidationState.INVALID,
  }
}

Cases['Valid'] = {
  field: {
    id: 'Default-1',
    label: 'Valid',
    on: {
      change: action("on.change (value:string[])"),
      validate: action("on.validate ()")

    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    value: ['item1'],
    valid: ValidationState.VALID,
  }
}

Cases['Required'] = {
  field: {
    id: 'required-1',
    label: 'Required',
    on: {
      change: action("on.change (value:string[])"),
      validate: action("on.validate ()")

    },
    required: true,
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    valid: ValidationState.NONE,
    value: ['item1']
  }
}

Cases['Disabled'] = {
  field: {
    id: 'Default-1',
    label: 'Disabled',
    on: {
      change: action("on.change (value:string[])"),
      validate: action("on.validate ()")

    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    value: ['item1'],
    valid: ValidationState.NONE,

    disabled: true
  }
}

Cases['A lot of items'] = {
  field: {
    id: 'lotItems-1',
    valid: ValidationState.NONE,

    label: 'A lot of items',
    on: {
      change: action("on.change (value:string[])"),
      validate: action("on.validate ()")

    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    value: [
      "item0",
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
      "item9",
      "item10",
      "item11",
      "item12",
      "item13",
      "item14",
      "item15",
      "item16",
      "item17",
      "item18",
      "item19",
      "item20",
      "item21",
      "item22",
      "item23",
      "item24",
      "item25",
      "item26",
      "item27",
      "item28",
      "item29",
      "item30",
      "item31",
      "item32",
      "item33",
      "item34",
      "item35",
      "item36",
      "item37",
      "item38",
      "item39",
      "item40",
      "item41",
      "item42",
      "item43",
      "item44",
      "item45",
      "item46",
      "item47",
      "item48",
      "item49",
      "item50",
      "item51",
      "item52",
      "item53",
      "item54",
      "item55",
      "item56",
      "item57",
      "item58",
      "item59",
      "item60",
      "item61",
      "item62",
      "item63",
      "item64",
      "item65",
      "item66",
      "item67",
      "item68",
      "item69",
      "item70",
      "item71",
      "item72",
      "item73",
      "item74",
      "item75",
      "item76",
      "item77",
      "item78",
      "item79",
      "item80",
      "item81",
      "item82",
      "item83",
      "item84",
      "item85",
      "item86",
      "item87",
      "item88",
      "item89",
      "item90",
      "item91",
      "item92",
      "item93",
      "item94",
      "item95",
      "item96",
      "item97",
      "item98",
      "item99",
      "item100",
      "item101",
      "item102",
      "item103",
      "item104",
      "item105",
      "item106",
      "item107",
      "item108",
      "item109",
      "item110",
      "item111",
      "item112",
      "item113",
      "item114",
      "item115",
      "item116",
      "item117",
      "item118"
    ]
  }
}

export default Cases;