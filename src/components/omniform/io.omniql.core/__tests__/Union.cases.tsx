import { IUnionProps } from '../../base';
import { action } from "@kadira/storybook";
import Table from '../Table';
import String from '../String';

let Cases: { [id: string]: IUnionProps } = {};
/*
Cases['Default'] = {
  field: {
    label: 'Select a table',
    id: "disabled-1",
    value: 1,
    options: {
      'Table 0': 0,
      'Table 1': 1,
      'Table 2': 2
    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    on: {
      change: action("on.change (value:number)")
    },
  },
  tables: [
    {
      props: {
        rows: [
          [
            {
              field: {
                label: 'Invalid',
                value: 'Invalid field value',
                error: "Invalid field",
                id: "invalid-1",
                valid: false,
                help: {
                  short: "Short description",
                  long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
                },
                on: {
                  change: action("on.change (value:string)")

                }
              },
              renderer: String
            }
          ]
        ]
      },
      renderer: Table,
      name: 'Table 0'
    },
    {
      props: {
        rows: [
          [
            {
              field: {
                label: 'Invalid',
                value: 'Invalid field value',
                error: "Invalid field",
                id: "invalid-1",
                valid: false,
                help: {
                  short: "Short description",
                  long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
                },
                on: {
                  change: action("on.change (value:string)")

                }
              },
              renderer: String
            }
          ]
        ]
      },
      renderer: Table,
      name: 'Table 1'
    },
    {
      props: {
        rows: [
          [
            {
              field: {
                label: 'Invalid',
                value: 'Invalid field value',
                error: "Invalid field",
                id: "invalid-1",
                valid: false,
                help: {
                  short: "Short description",
                  long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
                },
                on: {
                  change: action("on.change (value:string)")

                }
              },
              renderer: String
            }
          ]
        ]
      },
      renderer: Table,
      name: 'Table 2'
    }
  ]
}


Cases['No tables'] = {
  tables: []
}

Cases['One table'] = {
  field: {
    label: 'Select a table',
    id: "disabled-1",
    value: 0,
    options: {
      'Table 0': 0
    },
    help: {
      short: "Short description",
      long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
    },
    on: {
      change: action("on.change (value:number)")
    },
  },
  tables: [
    {
      props: {
        rows: [
          [
            {
              field: {
                label: 'Invalid',
                value: 'Invalid field value',
                error: "Invalid field",
                id: "invalid-1",
                valid: false,
                help: {
                  short: "Short description",
                  long: "Long description Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus."
                },
                on: {
                  change: action("on.change (value:string)")
                }
              },
              renderer: String
            }
          ]
        ]
      },
      renderer: Table,
      name: 'Table 1'
    }
  ]
}

export default Cases;*/