
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./Enum.cases";
import Enum from '../Enum';

const story = storiesOf('<io.omniql.core.Enum />', module);
let key: string;

function element(iKey: string) {
	return function () {
		return <Enum {...Cases[iKey]}/>
	}
}

for (key in Cases) {
	story.add(key, element(key))
}