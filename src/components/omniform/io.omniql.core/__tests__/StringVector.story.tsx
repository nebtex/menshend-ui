
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./StringVector.cases";
import StringVector from '../StringVector';

const story = storiesOf('<io.omniql.core.StringVector />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <StringVector {...Cases[iKey]}/>
    }
}

for (key in Cases) {
    story.add(key, element(key))
}