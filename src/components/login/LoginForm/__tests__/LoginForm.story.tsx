
import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Cases from "./LoginForm.cases";
import LoginForm from '../LoginForm';

const story = storiesOf('<LoginForm />', module);
let key: string;

function element(iKey: string) {
    return function () {
        return <LoginForm {...Cases[iKey]}
         userPassLogin={action("userPassLogin (user:string, password: string)")}
         tokenLogin={action("tokenLogin (token:string)")}
         githubLogin={action("githubLogin ()")}/>
    }
}

for (key in Cases) {
    story.add(key, element(key))
}