
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./ServiceInfoCard.cases";
import ServiceInfoCard from '../ServiceInfoCard';

const story = storiesOf('<ServiceInfoCard />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <ServiceInfoCard {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}