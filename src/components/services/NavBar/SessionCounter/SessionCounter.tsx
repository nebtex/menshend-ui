import * as React from 'react';
let styles = require('./SessionCounter.scss');

const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

export interface ISessionCounterProps {
  expiresAt: number;
}

interface ISessionCounterState {
  hours:number;
  minutes:number;
  seconds:number;
}

let counterInterval:any;

export class SessionCounter extends React.Component<ISessionCounterProps, ISessionCounterState> {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentDidMount(){
    counterInterval = setInterval(() => {
      let time = this.props.expiresAt - Date.now(),
          expired = time < 0 ? true : false;

      let seconds = Math.floor((time / SECOND) % 60);
      let minutes = Math.floor((time / MINUTE) % 60);
      let hours = Math.floor((time / HOUR));

      if (expired){
        clearInterval(counterInterval);
        this.setState({
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }else {
        this.setState({
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      }
    }, 1000);
  };

  getDisplayCounter = () => {
    if(this.props.expiresAt === 0){
      return (
        <div className={styles.container}>
          <div className={styles.neverExpires}>Your session will never expires</div>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.displayItem}>
            {this.state.hours}<strong>H</strong>
          </div>
          <div className={styles.displayItem}>
            {this.state.minutes}<strong>M</strong>
          </div>
          <div className={styles.displayItem}>
            {this.state.seconds}<strong>S</strong>
          </div>
        </div>
      );
    }
  }

  render(){
    const display = this.getDisplayCounter();

    return display;
  }
}