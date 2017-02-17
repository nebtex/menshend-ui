
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./EditModalBody.cases";
import EditModalBody from '../EditModalBody';

const story = storiesOf('<EditModalBody />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <EditModalBody {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}