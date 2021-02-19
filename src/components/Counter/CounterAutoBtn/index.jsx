import React, { Component } from "react";
import CounterAutoBtnSettings from "../CounterAutoBtnSettings";

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
        <CounterAutoBtnSettings interval={interval} isRunning={isRunning} time={time} handleChengeInterval={this.handleChengeInterval}/>
        <button disabled={isRunning} onClick={this.handleAutoClicker}>AutoBtn</button>
      </>
    );
  }
}

export default CounterAutoBtn;
