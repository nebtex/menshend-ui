
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./SecretPathsSection.cases";
import SecretPathsSection from '../SecretPathsSection';

const story = storiesOf('<SecretPathsSection />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <SecretPathsSection {...Cases[iKey]} />
    }
}

for (key in Cases) {
    story.add(key, element(key))
}