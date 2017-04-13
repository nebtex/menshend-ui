import '!style-loader!css-loader!sass-loader!../styles/app.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LandingPage } from './LandingPage';

ReactDOM.render(
  <LandingPage />,
  document.getElementById("root")
);