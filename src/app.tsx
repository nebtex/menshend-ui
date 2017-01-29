import 'bootstrap/dist/css/bootstrap.css';
import '!style-loader!css-loader!sass-loader!./styles/app.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container } from 'reactstrap';
import Login from './containers/Login';

let mockUser = {
  user: 'myuser',
  pass: 'mypass',
  isLogged: true,
  expiresAt: 1485770407948
}

class App extends React.Component<{},{}> {
  render() {
    return (
      <Login user={mockUser}/>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);