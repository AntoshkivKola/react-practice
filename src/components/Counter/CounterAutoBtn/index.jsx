import React, { Component } from "react";

class CounterAutoBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: 1, time: 5 };
  }

  handleAutoClicker = () => {
    const { count, step } = this.props;
    const { interval, time } = this.state;
   
    let operation = 0;
    const maxOperation =  Math.ceil(time/interval);
    const intervalId = setInterval(() => {
      ++operation;
      count(step);

      if (operation >= maxOperation) {
        clearInterval(intervalId);
        operation = 0;
      }
    }, interval * 1000);
  };

  handleChengeInterval =({ target: { value } })=>{
    this.setState({ interval:value });
  }

  render() {
    const {interval, time} = this.state;
    return (
      <>
        <div>How time: {time}s</div>
        <div>How often: {interval}<input type="range" min="0.5" max="3" step="0.1" value={interval} onChange={this.handleChengeInterval}/> s</div>
        <button onClick={this.handleAutoClicker}>AutoBtn</button>
      </>
    );
  }
}

export default CounterAutoBtn;
