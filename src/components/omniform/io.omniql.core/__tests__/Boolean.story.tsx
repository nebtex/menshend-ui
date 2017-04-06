
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./Boolean.cases";
import Boolean from '../Boolean';

const story = storiesOf('<io.omniql.core.Boolean />', module);
let key: string;

function element(iKey: string) {
	return function () {
		return <Boolean {...Cases[iKey]}/>
	}
}

for (key in Cases) {
	story.add(key, element(key))
}