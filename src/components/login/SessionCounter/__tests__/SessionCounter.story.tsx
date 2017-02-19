
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./SessionCounter.cases";
import SessionCounter from '../SessionCounter';

const story = storiesOf('<SessionCounter />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <SessionCounter {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}