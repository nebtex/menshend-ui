
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./EditableList.cases";
import EditableList from '../EditableList';

const story = storiesOf('<EditableList />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <EditableList {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}