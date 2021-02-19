import React, { Component } from "react";
import CounterAutoBtn from "../CounterAutoBtn";
import CounterBtnSettings from "../CounterBtnSettings";

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
          <CounterBtnSettings isAdd={isAdd} isRunning={isRunning} handleDirection={this.handleDirection} step={step} handleChengeStep={this.handleChengeStep}/>
          <button disabled={isRunning}  onClick={this.handleIncrement}>Change</button>
        </div>
        <CounterAutoBtn count={this.count} step={step} isRunning={isRunning} changeIsRunning={this.changeIsRunning}/>
      </>
    );
  }
}

export default CounterBtn;
