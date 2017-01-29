import 'bootstrap/dist/css/bootstrap.css';
import '!style-loader!css-loader!sass-loader!./styles/app.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container } from 'reactstrap';
import Login from './containers/Login';

let mockUser = {
  isLogged: true
}

class App extends React.Component<{},{}> {
  render() {
    return (
      <Login isLogged={mockUser.isLogged}/>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);