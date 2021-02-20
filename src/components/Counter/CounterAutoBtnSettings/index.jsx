import React, { Component } from "react";
import styles from "./CounterAutoBtnSettings.module.css"

class CounterAutoBtnSettings extends Component {
  render() {
    const { time, isRunning, interval, handleChengeInterval } = this.props;
    return (
      <>
        <div className={styles.range}>
          How time: {time}{" "}s
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
        </div>
        <div className={styles.range}>
          How often: {interval}s
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
          
        </div>
      </>
    );
  }
}

export default CounterAutoBtnSettings;
