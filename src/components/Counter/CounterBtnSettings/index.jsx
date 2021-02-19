import React, { Component } from 'react';

class CounterBtnSettings extends Component {
  render() {
    const {isAdd, isRunning,handleDirection, step,handleChengeStep} = this.props;
   
    return (
      <>
        <div >
            add?{" "}
            <input
              type="checkbox"
              checked={isAdd}
              onChange={handleDirection}
              disabled={isRunning}
            />
          </div>
          <div>
            Will be {isAdd ? " + " : " - "}:{" "}
            <input
              type="number"
              value={step}
              onChange={handleChengeStep}
              disabled={isRunning}
            />
          </div>
      </>
    );
  }
}

export default CounterBtnSettings;
