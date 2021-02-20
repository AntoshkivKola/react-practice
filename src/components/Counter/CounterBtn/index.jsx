import React, { Component } from "react";
import CounterAutoBtn from "../CounterAutoBtn";
import styles from "./CounterBtn.module.css";
import stylesBtn from "../Counter.module.css";

class CounterBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isAdd: true,
      isRunning: false,
      customize: false,
    };
  }

  count = (step) => {
    const { isAdd } = this.state;
    this.setState((state) => {
      return { counter: isAdd ? state.counter + step : state.counter - step };
    });
  };

  handleIncrement = () => {
    const { step } = this.props;
    this.count(step);
  };

  handleChengeStep = ({ target: { value } }) => {
    const { setStep } = this.props;

    setStep(Number(value));
  };

  handleDirection = ({ target: { checked } }) => {
    this.setState({ isAdd: checked });
  };

  changeIsRunning = () => {
    this.setState((state) => {
      return { isRunning: !state.isRunning };
    });
  };

  render() {
    const { counter, isAdd, isRunning } = this.state;
    const { step } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.counter}>{counter}</div>

        <button
          className={isRunning ? stylesBtn.btnDisabled : stylesBtn.btn}
          disabled={isRunning}
          onClick={this.handleIncrement}
        >
          Change
        </button>

        <CounterAutoBtn
          count={this.count}
          step={step}
          isRunning={isRunning}
          changeIsRunning={this.changeIsRunning}
          isAdd={isAdd}
          handleDirection={this.handleDirection}
          handleChengeStep={this.handleChengeStep}
        />
      </div>
    );
  }
}

export default CounterBtn;
