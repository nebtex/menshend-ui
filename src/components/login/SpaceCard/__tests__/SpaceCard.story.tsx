
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./SpaceCard.cases";
import SpaceCard from '../SpaceCard';

const story = storiesOf('<SpaceCard />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <SpaceCard {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}