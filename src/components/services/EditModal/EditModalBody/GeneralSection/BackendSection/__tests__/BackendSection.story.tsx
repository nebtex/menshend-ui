
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./BackendSection.cases";
import BackendSection from '../BackendSection';

const story = storiesOf('<BackendSection />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <BackendSection {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}