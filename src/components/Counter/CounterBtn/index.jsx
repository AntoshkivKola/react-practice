import React, { Component } from "react";
import CounterAutoBtn from "../CounterAutoBtn";

class CounterBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, isAdd: true,isRunning: false };
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

  changeIsRunning =()=>{
    this.setState((state)=>{return{isRunning: !state.isRunning};});
  }

  render() {
    const { counter, isAdd,isRunning } = this.state;
    const { step } = this.props;
    return (
      <>
        <div >
          <div>{counter}</div>
          <div >
            add?{" "}
            <input
              type="checkbox"
              checked={isAdd}
              onChange={this.handleDirection}
              disabled={isRunning}
            />
          </div>
          <div>
            Will be {isAdd ? " + " : " - "}:{" "}
            <input
              type="number"
              value={step}
              onChange={this.handleChengeStep}
              disabled={isRunning}
            />
          </div>
          <button disabled={isRunning}  onClick={this.handleIncrement}>Change</button>
        </div>
        <CounterAutoBtn count={this.count} step={step} isRunning={isRunning} changeIsRunning={this.changeIsRunning}/>
      </>
    );
  }
}

export default CounterBtn;
