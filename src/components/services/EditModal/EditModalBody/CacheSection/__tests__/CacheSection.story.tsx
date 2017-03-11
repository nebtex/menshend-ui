
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./CacheSection.cases";
import CacheSection from '../CacheSection';

const story = storiesOf('<CacheSection />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <CacheSection {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}