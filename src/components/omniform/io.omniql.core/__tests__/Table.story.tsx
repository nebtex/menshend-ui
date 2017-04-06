
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./Table.cases";
import Table from '../Table';

const story = storiesOf('<io.omniql.core.Table />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <Table {...Cases[iKey]}/>
    }
}

for (key in Cases) {
    story.add(key, element(key))
}