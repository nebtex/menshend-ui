
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./Code.cases";
import Code from '../Code';

const story = storiesOf('<io.omniql.core.Code />', module);
let key: string;

function element(iKey: string) {
	return function () {
		return <Code {...Cases[iKey]}/>
	}
}

for (key in Cases) {
	story.add(key, element(key))
}