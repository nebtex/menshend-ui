import * as React from 'react';
import { Card, CardBlock } from 'reactstrap';
let styles = require('./ServiceCounter.scss');

interface IServiceCounter {
  expiresAt: number;
};

const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

export default class ServiceCounter extends React.Component<IServiceCounter, {}>{
  state = {
    hours: '',
    minutes: '',
    seconds: ''
  };

  componentDidMount(){
    setInterval(() => {
      let time = this.props.expiresAt - Date.now();

      let seconds = Math.floor((time / SECOND) % 60);
      let minutes = Math.floor((time / MINUTE) % 60);
      let hours = Math.floor((time / HOUR));

      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }, 1000);
  };

  getDisplayComponent = () => {
    return (
      <div className={styles.display}>
        <div>
          <div>{this.state.hours}</div>
          <div>Hours</div>
        </div>
        <div>
          <div>{this.state.minutes}</div>
          <div>Minutes</div>
        </div>
        <div>
          <div>{this.state.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    )
  };

  render(){
    let display = this.getDisplayComponent();

    return (
      <Card className={styles.container}>
        <CardBlock>
          <p>Your session will expire in :</p>
          {display}
        </CardBlock>
      </Card>
    );
  }
}