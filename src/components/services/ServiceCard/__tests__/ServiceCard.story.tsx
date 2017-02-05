
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./ServiceCard.cases";
import ServiceCard from '../ServiceCard';

const story = storiesOf('<ServiceCard />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <ServiceCard {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}