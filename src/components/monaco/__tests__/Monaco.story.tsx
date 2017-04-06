
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./Monaco.cases";
import Monaco from '../Monaco';

const story = storiesOf('<Monaco />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <Monaco {...Cases[iKey]} />

    }
}

for (key in Cases) {
    story.add(key, element(key))
}