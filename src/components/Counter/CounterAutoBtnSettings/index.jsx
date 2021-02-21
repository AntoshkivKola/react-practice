import React from "react";
import styles from "./CounterAutoBtnSettings.module.css";
import PropTypes from "prop-types";

function CounterAutoBtnSettings(props) {
  const { time, isRunning, interval, handleChengeInterval } = props;
  return (
    <>
      <div className={styles.range}>
        How time: {time} s
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
CounterAutoBtnSettings.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  interval: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  handleChengeInterval: PropTypes.func.isRequired,
};
export default CounterAutoBtnSettings;
