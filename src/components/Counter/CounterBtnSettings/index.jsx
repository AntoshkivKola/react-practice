import React, { Component } from 'react';
import styles from "./CounterBtnSettings.module.css"

class CounterBtnSettings extends Component {
  render() {
    const {isAdd, isRunning,handleDirection, step,handleChengeStep} = this.props;
   
    return (
      <>
        <div className={styles.add}>
            Add?{" "}
            <input
              type="checkbox"
              checked={isAdd}
              onChange={handleDirection}
              disabled={isRunning}
            />
          </div>
          <div className={styles.count}>
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
