import React, { Component } from "react";

class CounterAutoBtnSettings extends Component {
  render() {
    const { time, isRunning, interval, handleChengeInterval } = this.props;
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
            onChange={handleChengeInterval}
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
            onChange={handleChengeInterval}
            disabled={isRunning}
          />{" "}
          s
        </div>
      </>
    );
  }
}

export default CounterAutoBtnSettings;
