
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./CorsSection.cases";
import CorsSection from '../CorsSection';

const story = storiesOf('<CorsSection />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <CorsSection {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}