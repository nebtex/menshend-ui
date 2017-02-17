
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./EditModalHeader.cases";
import EditModalHeader from '../EditModalHeader';

const story = storiesOf('<EditModalHeader />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <EditModalHeader {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}