import React, { Component } from "react";
import stylesBtn from "../Counter.module.css";
import CounterSettings from "../CounterSettings";
import PropTypes from 'prop-types';

class CounterAutoBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: 1, time: 5 };
  }

  handleAutoClicker = () => {
    const { count, step, isRunning, changeIsRunning } = this.props;
    const { interval, time } = this.state;

    if (isRunning) {
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

  componentWillMount = () => {
    this.handleAutoClicker();
  };

  handleChengeInterval = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { interval, time } = this.state;
    const {
      step,
      handleChengeStep,
      isAdd,
      handleDirection,
      isRunning,
    } = this.props;

    return (
      <>
        <button
          className={isRunning ? stylesBtn.btnDisabled : stylesBtn.btn}
          disabled={isRunning}
          onClick={this.handleAutoClicker}
        >
          AutoBtn
        </button>
        <CounterSettings
          isAdd={isAdd}
          isRunning={isRunning}
          handleDirection={handleDirection}
          step={step}
          handleChengeStep={handleChengeStep}
          interval={interval}
          time={time}
          handleChengeInterval={this.handleChengeInterval}
        />
      </>
    );
  }
}

CounterAutoBtn.propTypes = {
  count:  PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  changeIsRunning: PropTypes.func.isRequired,
  isAdd: PropTypes.bool,
  handleDirection: PropTypes.func,
  handleChengeStep: PropTypes.func,
}
export default CounterAutoBtn;
