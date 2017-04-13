[![codecov](https://codecov.io/gh/NebTex/menshend-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/NebTex/menshend-ui)
[![Build Status](https://travis-ci.org/nebtex/menshend-ui.svg?branch=master)](https://travis-ci.org/nebtex/menshend-ui)

React Typescript Boilerplate
=======================

To run the project install the required dependencies, make sure you have yarn installed

	yarn install

To start developing

	yarn start

To test the project, make sure you have json-server installed as a global:

	npm install -g json-server

then

	yarn test

To run the storybook local server

	yarn storybook

To build the distribution version:

	yarn run build

----

Component folder structure
---
Each component has its own folder, that folder contains a `Component.tsx` (Component definition), a `Component.scss` that contains all the styles of the component,  a  `__tests__` folder, that contains  `.cases.tsx`, `.story.tsx` and `.spec.tsx`  files (for more info see `Test process` section), ie:
```
+-- MyComponent
|   +-- MyComponent.tsx
|   +-- MyComponent.scss
|   +-- __tests__
|		+--MyComponent.cases.tsx
|		+--MyComponent.story.tsx
|		+--MyComponent.spec.tsx
```

Test process
---
To test your components you have to put a `__tests__` folder inside the same folder component (see component structure folder section).

#### <i class="icon-file"></i> MyComponent.cases.tsx
In this file you have to put all the possible test cases `MyComponent.tsx`, import the needed dependencies and export the `Cases` var, `Cases` is an object with the possible cases as keys and the possible component props as values, ie:

```
import MyComponent, { IMyComponentProps } from '../MyComponent';

let Cases : {[id:string]:IMyComponentProps} = {};

Cases['Defined name'] = {
  name:'My component name'
}

Cases['Undefined Name'] = {};

export default Cases;
```

#### <i class="icon-file"></i> MyComponent.story.tsx

In this file you have to iterate over the `Cases` exported by `MyComponent.cases.tsx` file, and use the `@kadira/storybook` dependence to render all the possible cases, ie:

```
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./MyComponent.cases";
import MyComponent from '../MyComponent';

const story = storiesOf('<MyComponent />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <MyComponent {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}
```

> **Note:**

> - You can run `yarn storybook` to see all the component stories of your `.cases.tsx` file in the browser at `http://localhost:6000`, that's possible because  `.story.tsx` file.

#### <i class="icon-file"></i> MyComponent.spec.tsx

In this file you are able to test `MyComponent.tsx` specs helping with Jest and Enzyme, ie:

```
/// <reference types='jest' />

import * as React from 'react';
import  MyComponent from '../MyComponent';
import  Cases from './MyComponent.cases';
import { mount } from 'enzyme';

describe('MyComponent', () => {
  let myComponent:any;

  describe('Defined name', () => {
    beforeEach(() => {
      myComponent = mount(<myComponent {...Cases['Defined name']} />);
    });

    it('should render correctly ', () => {
	expect(myComponent.find('h1').first().text()).toEqual(myComponent.props().name    });
  });
});
```
> **Note:**

> - To run the tests  `yarn test` , The `$CODECOV_TOKEN`  env var can be set to send a code coverage report to codecov service.

CSS modules
---

Each component has its own `.scss` file, you can use the defined styles importing it directly into the `Component.tsx` (See `Component folder structure`), ie:

#### <i class="icon-file"></i> MyComponent.scss
```
.title {
	font-size: 2rem;
	color: blue;
}
```

#### <i class="icon-file"></i> MyComponent.tsx
```
import * as React from 'react';
let styles = require('MyComponent.scss')

export IMyComponentProps {
	name?:string;
}

export default class MyComponent extends React.Component<IMyComponentProps, {}>{
	static defaultProps = {
		name: 'Anonymous'
	}
	render(){
		const { name } = this.props;
		return <div><h1 className={styles.title}>Hello {name}!!!</h1></div>
	}
}
```

For more info about css-modules : https://github.com/css-modules/css-modules

Missing typings
---

For the use of new dependencies make sure the typing definitions exists, first try to run 

`yarn add @types/my-dependence --dev`

and check if the dependence typing match/exist, if the dependence typing does not exist, you have to write it.

To write your dependence type definition, create a folder with the dependence name into the `types` folder at the root of the project, and inside the new folder create a `index.d.ts` file, ie: 

```
+-- types
|   +-- my-dependence
|		+--index.d.ts
```

To write your file please check this resource:

https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

In some cases the typing definitions for some dependences are already defined, but maybe the right way to import this is unknown, in that case check this resource:    

https://github.com/DefinitelyTyped/DefinitelyTyped/ 