import React, { Component } from "react";
import CounterAutoBtn from "../CounterAutoBtn";

class CounterBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, isAdd: true };
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

  render() {
    const { counter, isAdd } = this.state;
    const { step } = this.props;
    return (
      <>
        <div>{counter}</div>
        <div>
          add?{" "}
          <input
            type="checkbox"
            checked={isAdd}
            onChange={this.handleDirection}
          />
        </div>
        <div>
          Will be {isAdd ? " + " : " - "}:{" "}
          <input type="number" value={step} onChange={this.handleChengeStep} />
        </div>
        <button onClick={this.handleIncrement}>Change</button>
        <CounterAutoBtn count={this.count} step={step}/>
      </>
    );
  }
}

export default CounterBtn;
