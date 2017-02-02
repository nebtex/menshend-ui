
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./EnvironmentCard.cases";
import EnvironmentCard from '../EnvironmentCard';

const story = storiesOf('<EnvironmentCard />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <EnvironmentCard {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}