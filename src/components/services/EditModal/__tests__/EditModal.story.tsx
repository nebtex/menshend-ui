
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./EditModal.cases";
import EditModal from '../EditModal';

const story = storiesOf('<EditModal />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <EditModal {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}