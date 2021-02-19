import React, { Component } from "react";

class CounterAutoBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: 1, time: 5,  };
  }

  handleAutoClicker = () => {
    const { count, step, isRunning, changeIsRunning } = this.props;
    const { interval, time } = this.state;

    if(isRunning){
      return false;
    }
    changeIsRunning();
    let operation = 0;
    const maxOperation = Math.ceil(time / interval);

    const intervalId = setInterval(() => {
      ++operation;
      count(step);

      if (operation >= maxOperation) {
        changeIsRunning();
        clearInterval(intervalId);
        operation = 0;
      }
    }, interval * 1000);

  };

  

  componentWillMount=()=>{
    this.handleAutoClicker();
  }

  handleChengeInterval = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { interval, time,  } = this.state;
    const {isRunning} = this.props;
    
    return (
      <>
        <div>
          How time: {time}{" "}
          <input
            type="range"
            name="time"
            min={interval}
            max="60"
            step="1"
            value={time}
            onChange={this.handleChengeInterval}
            disabled={isRunning}
          />
          s
        </div>
        <div>
          How often: {interval}
          <input
            type="range"
            name="interval"
            min="0.5"
            max="3"
            step="0.1"
            value={interval}
            onChange={this.handleChengeInterval}
            disabled={isRunning}
          />{" "}
          s
        </div>
        <button disabled={isRunning} onClick={this.handleAutoClicker}>AutoBtn</button>
      </>
    );
  }
}

export default CounterAutoBtn;
