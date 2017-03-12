
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./ShortDescriptionSection.cases";
import ShortDescriptionSection from '../ShortDescriptionSection';

const story = storiesOf('<ShortDescriptionSection />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <ShortDescriptionSection {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}