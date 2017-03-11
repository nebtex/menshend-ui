
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./GeneralSection.cases";
import GeneralSection from '../GeneralSection';

const story = storiesOf('<GeneralSection />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <GeneralSection {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}