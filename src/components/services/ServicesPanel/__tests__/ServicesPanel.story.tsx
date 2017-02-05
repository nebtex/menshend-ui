
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./ServicesPanel.cases";
import ServicesPanel from '../ServicesPanel';

const story = storiesOf('<ServicesPanel />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <ServicesPanel {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}