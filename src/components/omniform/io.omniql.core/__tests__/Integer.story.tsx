
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./Integer.cases";
import Integer from '../Integer';

const story = storiesOf('<io.omniql.core.Integer />', module);
let key: string;

function element(iKey: string) {
	return function () {
		return <Integer {...Cases[iKey]}/>
	}
}

for (key in Cases) {
	story.add(key, element(key))
}