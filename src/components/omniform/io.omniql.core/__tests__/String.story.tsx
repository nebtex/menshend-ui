
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./String.cases";
import String from '../String';

const story = storiesOf('<io.omniql.core.String />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <String {...Cases[iKey]}/>
    }
}

for (key in Cases) {
    story.add(key, element(key))
}