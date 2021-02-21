import React, { Component } from "react";
import CounterBtn from "./CounterBtn";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
  }


  setStep = (newStep) => this.setState({ step: newStep });



  render() {
    const { step } = this.state;
    return (
      <>
        <CounterBtn step={step} setStep={this.setStep} />
       
      </>
    );
  }
}

export default Counter;
