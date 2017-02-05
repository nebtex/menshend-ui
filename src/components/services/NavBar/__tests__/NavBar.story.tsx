import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./NavBar.cases";
import NavBar from '../NavBar';

const story = storiesOf('<NavBar />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <NavBar {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}